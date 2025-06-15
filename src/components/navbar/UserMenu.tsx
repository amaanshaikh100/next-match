"use client";

import { signOutUser } from "@/app/actions/authActions";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@heroui/react";
import Link from "next/link";

type Props = {
  userInfo: { name: string | null; image: string | null } | null;
};

export default function UserMenu({ userInfo }: Props) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={userInfo?.name || "user avatar"}
          src={userInfo?.image || "/images/user.png"}
        />
      </DropdownTrigger>

      <DropdownMenu variant="flat" aria-label="User actions menu">
        <DropdownSection showDivider>
          <DropdownItem
            isReadOnly
            as="span"
            className="h-14 flex flex-row"
            aria-label="username"
            key="signIn"
          >
            Signed in as {userInfo?.name}
          </DropdownItem>
        </DropdownSection>

        <DropdownItem key="editProfile" as={Link} href="/members/edit">
          Edit Profile
        </DropdownItem>

        <DropdownItem
          key={""}
          color="danger"
          onPress={async () => signOutUser()}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
