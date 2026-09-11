export type GalleryImage = {
  src: string;
  alt: string;
  w: number; // grid weight
  h: number;
  offset?: string; // tailwind class for asymmetric placement
};

export const gallery: GalleryImage[] = [
  { src: "/photos/photo-07.webp", alt: "Rahma & Prima — moment 01", w: 5, h: 7, offset: "col-start-1" },
  { src: "/photos/photo-08.webp", alt: "Rahma & Prima — moment 02", w: 4, h: 6, offset: "col-start-8" },
  { src: "/photos/photo-03.webp", alt: "Rahma & Prima — moment 03", w: 3, h: 4, offset: "col-start-3" },
  { src: "/photos/photo-11.webp", alt: "Rahma & Prima — moment 04", w: 5, h: 7, offset: "col-start-7" },
  { src: "/photos/photo-01.webp", alt: "Rahma & Prima — moment 05", w: 4, h: 5, offset: "col-start-2" },
  { src: "/photos/photo-06.webp", alt: "Rahma & Prima — moment 06", w: 5, h: 7, offset: "col-start-8" },
  { src: "/photos/photo-02.webp", alt: "Rahma & Prima — moment 07", w: 3, h: 4, offset: "col-start-1" },
  { src: "/photos/photo-12.webp", alt: "Rahma & Prima — moment 08", w: 4, h: 5, offset: "col-start-6" },
  { src: "/photos/photo-04.webp", alt: "Rahma & Prima — moment 09", w: 3, h: 4, offset: "col-start-3" },
  { src: "/photos/photo-09.webp", alt: "Rahma & Prima — moment 10", w: 5, h: 6, offset: "col-start-7" },
  { src: "/photos/photo-05.webp", alt: "Rahma & Prima — moment 11", w: 4, h: 5, offset: "col-start-2" },
  { src: "/photos/photo-10.webp", alt: "Rahma & Prima — moment 12", w: 4, h: 5, offset: "col-start-8" },
];

export const heroImages = ["/photos/photo-07.webp", "/photos/photo-08.webp", "/photos/photo-11.webp"];
