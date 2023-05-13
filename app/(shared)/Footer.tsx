import React from "react"

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="bg-wh-900 text-wh-50 py-10 px-10">
            <div className="justify-between mx-auto gap-16 sm:flex">
                {/*{ FIRST COLUMN }*/}
                <div className="mt-16 basis-1/2 sm:mt-0">
                    <h4 className="font-bold">AI BLOG</h4>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ullam?
                    </p>
                    <p>&copy; AI BLOG  All Rights Reserved. </p>
                </div>

                {/*{ SECOND COLUMN }*/}
                <div className="mt-16 basis-1/4 sm:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Lorem ipsum dolor.</p>
                    <p className="my-5">Lorem ipsum dolor.</p>
                    <p>Lorem ipsum dolor.</p>
                </div>

                {/*{ THIRD COLUMN }*/}
                <div className="mt-16 basis-1/4 sm:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Lorem ipsum dolor.</p>
                    <p className="my-5">Lorem ipsum dolor.</p>
                    <p>(098) 01-02-345</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
