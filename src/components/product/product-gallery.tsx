"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
    name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={cn(
                            "relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2",
                            selectedImage === index ? "border-primary" : "border-transparent"
                        )}
                        onClick={() => setSelectedImage(index)}
                    >
                        <Image
                            src={image}
                            alt={`${name} view ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
            <div className="relative flex-1 aspect-[3/4] md:aspect-square bg-muted rounded-lg overflow-hidden">
                <Image
                    src={images[selectedImage]}
                    alt={name}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
}
