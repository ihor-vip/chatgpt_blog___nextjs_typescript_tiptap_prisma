import React from "react";
import SocialLinks from "@/app/(shared)/SocialLinks";
import Subscribe from "@/app/(shared)/Subscribe";

type Props = {};

const Sidebar = (props: Props) => {
    return (
        <section>
            <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
                Subscribe and Follow
            </h4>

            <div className="my-5 mx-5">
                <SocialLinks isDark />
            </div>

            <Subscribe />
            <div className="bg-wh-900">Image</div>

            <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
                About the Blog
            </h4>

            <div className="flex justify-center my-3">
                Image
            </div>

            <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
                Sarah Connor
            </h4>

            <p className="text-wh-500 text-center text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, nobis!
            </p>
        </section>
    );
};

export default Sidebar;
