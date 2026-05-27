import { GalleryMasonry } from "@/components/gallery/GalleryMasonry";
import { PageShell } from "@/components/layout/PageShell";

export default function GalleryPage() {
  return (
    <PageShell
      label={{ en: "Gallery", zh: "相册" }}
      title={{ en: "Visual Archive", zh: "视觉档案" }}
    >
      <p className="mb-10 max-w-xl text-sm font-light leading-relaxed text-muted/80">
        生活现场、城市结构与光影瞬间。素材来自本地相册文件夹，按画面比例错落排布。
      </p>
      <GalleryMasonry />
    </PageShell>
  );
}
