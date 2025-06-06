"use client";

import { calculateAge } from "@/lib/utils";
import { Card, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Member } from "@prisma/client";
import Link from "next/link";

type Props = {
  member: Member;
};

export default function MemberCard({ member }: Props) {
  return (
    <Card fullWidth isPressable as={Link} href={`/members/${member.userId}`}>
      <Image
        isZoomed
        alt={member.name}
        width={300}
        src={member.image || "/images/user.png"}
        className="aspect-square object-cover"
      />

      <CardFooter className="flex justify-start bg-black overflow-hidden absolute bottom-0 z-10 bg-dark-gradient">
        <div className="flex flex-col text-white">
          <span className="font-semibold">
            {member.name}, {calculateAge(member.dateOfBirth)}
          </span>
          <span className="text-sm">{member.city}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
