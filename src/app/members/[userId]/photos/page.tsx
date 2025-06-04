import { getMemberPhotosByUserId } from "@/app/actions/memberActions";
import { CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";

export default async function PhotosPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const photos = await getMemberPhotosByUserId(userId);

  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Photos
      </CardHeader>

      <Divider />

      <CardBody>
        <div className="grid grid-cols-5 gap-3">
          {photos &&
            photos.map((photo) => {
              return (
                <div key={photo.id}>
                  <Image
                    width={300}
                    src={photo.url}
                    alt="Image of member"
                    className="object-cover aspect-square"
                  />
                </div>
              );
            })}
        </div>
      </CardBody>
    </>
  );
}
