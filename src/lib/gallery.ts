export type GalleryLayout = "normal" | "tall" | "wide" | "feature";

export type GalleryItem = {
  type: "image";
  src: string;
  alt: string;
  layout: GalleryLayout;
};

export const galleryItems: GalleryItem[] = [
  { type: "image", src: "/gallery/photo-1.jpg", alt: "光影瞬间 01", layout: "feature" },
  { type: "image", src: "/gallery/photo-2.jpg", alt: "城市街景", layout: "normal" },
  { type: "image", src: "/gallery/photo-3.jpg", alt: "现场氛围", layout: "tall" },
  { type: "image", src: "/gallery/photo-4.jpg", alt: "旅途风景", layout: "normal" },
  { type: "image", src: "/gallery/photo-5.jpg", alt: "日常片段", layout: "tall" },
  { type: "image", src: "/gallery/photo-6.jpg", alt: "光影记录 06", layout: "wide" },
  { type: "image", src: "/gallery/photo-7.jpg", alt: "生活随拍", layout: "normal" },
  { type: "image", src: "/gallery/photo-8.jpg", alt: "氛围瞬间", layout: "tall" },
  { type: "image", src: "/gallery/photo-9.jpg", alt: "光影记录 09", layout: "normal" },
  { type: "image", src: "/gallery/photo-10.jpg", alt: "旅途记忆", layout: "wide" },
  { type: "image", src: "/gallery/photo-11.jpg", alt: "生活记录", layout: "normal" },
  { type: "image", src: "/gallery/photo-12.jpg", alt: "定格时刻", layout: "feature" },
  { type: "image", src: "/gallery/photo-13.jpg", alt: "日常瞬间", layout: "tall" },
];

export const galleryLayoutClass: Record<GalleryLayout, string> = {
  normal: "col-span-1 row-span-1",
  tall: "col-span-1 row-span-2",
  wide: "col-span-2 row-span-1",
  feature: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
};