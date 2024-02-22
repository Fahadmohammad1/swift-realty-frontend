import React from "react";
import notFound from "@/assets/images/not-found.png";
import Image from "next/image";
import DynamicBanner from "@/components/ui/shared/DynamicBanner";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section>
      <DynamicBanner title="404 Not Found" />
      <div className="flex justify-center my-[60px]">
        <Link href="/">
          <Image src={notFound} width={1255} height={984} alt="not found" />
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
