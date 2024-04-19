"use client";

import { getListCollections } from "@/action/function";
import {
  Textarea,
  Button,
  Avatar,
  Select,
  SelectItem,
  Card,
  Image,
} from "@nextui-org/react";
import React, { FormEvent, useEffect } from "react";
import toast from "react-hot-toast";

import { type Collection, type Model } from "replicate";
import { FiEye } from "react-icons/fi";

import { v4 as uuidV4 } from "uuid";

import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { sizes } from "@/lib/utils";
import { ITSize } from "@/types";

export function ReplicateForm() {
  const [prompt, setPrompt] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState<{
    url: string;
    id: string;
    width: number;
    height: number;
  } | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageSize, setImageSize] = React.useState<ITSize | null>(null);
  const [model, setModel] = React.useState<Model | null>(null);
  const [collections, setCollections] = React.useState<Model[] | []>([]);
  const [loading, setLoading] = React.useState(false);
  const [Images, setImages] = React.useState<
    { url: string; id: string; width: number; height: number }[]
  >([]);

  useEffect(() => {
    (async () => {
      const listCollections: Collection = await getListCollections();
      setCollections(listCollections.models!);
    })();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      setLoading(true);

      console.log("data", {
        prompt,
        imageSize,
        model,
      });

      console.log("collections", collections);
      const response = await fetch("/api/replicate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          collection: model,
          witdh: imageSize?.width,
          height: imageSize?.height,
        }),
      });
      const data = await response.json();
      console.log({ data });

      const replicateData = data.message;

      const isDataArray = Array.isArray(replicateData);

      isDataArray
        ? replicateData.map((item: string) =>
            setImages((prev) => [
              {
                id: uuidV4(),
                url: item,
                height: imageSize?.height!,
                width: imageSize?.width!,
              },
              ...prev,
            ])
          )
        : setImages((prev) => [
            {
              id: uuidV4(),
              url: replicateData,
              height: imageSize?.height!,
              width: imageSize?.width!,
            },
            ...prev,
          ]);
      console.log(data);
      toast.success("Done");
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  function handleSelectModel(currentKey: string) {
    const currentModel = collections.find(
      (item, index) => item.latest_version?.id === currentKey
    );
    currentModel ? setModel(currentModel) : setModel(null);
  }

  function handleSelectSize(currentKey: string) {
    const currentId = parseInt(currentKey);
    const currentSize = sizes.find((item) => item.id === currentId);
    currentSize ? setImageSize(currentSize) : setImageSize(null);
  }

  function OnOpenModel(image: {
    url: string;
    id: string;
    width: number;
    height: number;
  }) {
    setSelectedImage(image);
    onOpen();
  }

  return (
    <>
      {selectedImage && (
        <Modal size="full" isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="items-center justify-center py-0">
                  <Image
                    alt="Ai Image"
                    className="z-50 w-full max-h-screen h-full object-cover my-0 rounded-none"
                    src={selectedImage.url}
                    classNames={{
                      wrapper: "h-full",
                    }}
                  />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
      <div className="px-3">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            {" "}
            <Textarea
              isRequired
              label="Pormpt"
              labelPlacement="outside"
              placeholder="Enter your prompt here"
              className="w-full"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Select
                isRequired
                items={collections}
                label="Model"
                placeholder="Select a model"
                labelPlacement="outside"
                classNames={{
                  base: "max-w-full",
                  trigger: "h-12",
                }}
                onSelectionChange={(event) =>
                  //  @ts-ignore
                  handleSelectModel(event.currentKey)
                }
              >
                {(collection) => (
                  <SelectItem
                    key={`${collection.latest_version?.id!}`}
                    textValue={`${collection.owner}/${collection.name}`}
                    value={`${collection.latest_version?.id!}`}
                  >
                    <div className="flex gap-2 items-center">
                      <Avatar
                        alt={`${collection.name} image`}
                        className="flex-shrink-0"
                        size="sm"
                        src={collection.cover_image_url}
                      />
                      <div className="flex flex-col">
                        <span className="text-small dark:text-gray-50">
                          {collection.name}
                        </span>
                        <span className="text-tiny text-default-400 dark:text-gray-200">
                          {collection.description}
                        </span>
                      </div>
                    </div>
                  </SelectItem>
                )}
              </Select>
              <Select
                isRequired
                items={sizes}
                label="Size"
                placeholder="Select  ratio"
                labelPlacement="outside"
                classNames={{
                  base: "max-w-full",
                  trigger: "h-12",
                }}
                //  @ts-ignore
                onSelectionChange={(event) =>
                  //  @ts-ignore
                  handleSelectSize(event.currentKey)
                }
              >
                {(sizes) => (
                  <SelectItem
                    key={sizes.id}
                    textValue={`${sizes.name}`}
                    value={sizes.id}
                  >
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <span className="text-small dark:text-gray-50">
                          {sizes.name}
                        </span>
                      </div>
                    </div>
                  </SelectItem>
                )}
              </Select>
            </div>
          </div>

          <div className="flex justify-center my-4">
            <Button
              color="secondary"
              variant="shadow"
              isLoading={loading}
              className="w-full"
              type="submit"
              spinner={
                <svg
                  className="animate-spin h-5 w-5 text-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    fill="currentColor"
                  />
                </svg>
              }
            >
              Generate Image
            </Button>
          </div>
        </form>
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-3">
          {Images.map((image, index) => (
            <Card
              className="relative h-fit"
              key={`${image.id}-${index}-${image.height}`}
            >
              <Image
                isZoomed
                alt="Ai Image"
                className="z-0 w-full h-full object-cover my-0"
                src={image.url}
                width={imageSize?.width!}
                height={imageSize?.height!}
              />
              <div
                className="absolute group inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => OnOpenModel(image)}
              >
                <Button
                  isIconOnly
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                  variant="light"
                  onPress={() => OnOpenModel(image)}
                >
                  <FiEye size={24} color="#262626" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
