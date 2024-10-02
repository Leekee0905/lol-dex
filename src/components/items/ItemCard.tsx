import { ItemDataDataType } from "@/types/itemType";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import Image from "next/image";

const ItemCard = ({
  data,
  version,
}: {
  data: ItemDataDataType;
  version: string;
}) => {
  return (
    <Card className="flex flex-col items-center justify-center">
      <CardHeader>
        <Image
          src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version}/img/item/${data.image.full}`}
          width={100}
          height={100}
          alt={data.name}
          className="w-full h-auto"
        />
      </CardHeader>
      <CardTitle className="text-sm md:text-2xl">{data.name}</CardTitle>

      <CardContent>
        <CardDescription>{data.plaintext}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
