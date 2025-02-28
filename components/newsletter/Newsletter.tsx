"use client";

import { useNewsLetterContext } from "@/hooks/useDialog";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTitle,
} from "@radix-ui/react-dialog";
import Image from "next/image";
import exitButton from "../../public/exit.svg";
import { DialogHeader } from "../ui/dialog";
import NewsletterComponent from "./NewsletterComponent";

export const Newsletter = () => {
    const { isNewsletterOpen, setNewsletterOpen } = useNewsLetterContext();
    return (
        <Dialog open={isNewsletterOpen} onOpenChange={setNewsletterOpen}>
            <DialogContent className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
                <DialogHeader>
                    <div
                        className={`relative bg-background-event max-w-xl border border-black flex flex-col pb-8 px-28 p-12 gap-5`}
                    >
                        <DialogClose asChild>
                            <button className="absolute top-0 right-0 h-8 w-8 mt-4 mr-4">
                                <Image
                                    src={exitButton}
                                    alt={
                                        "Exitknapp for å lukke nyhetsbrevpåmeldingen"
                                    }
                                />
                            </button>
                        </DialogClose>
                        <DialogTitle className="text-lg text-center font-normal">
                            Meld deg på nyhetsbrev fra ibruddet og få ekslusiv
                            info, billetter til redusert pris og andre tilbud!
                        </DialogTitle>

                        <div className="self-center">
                            <NewsletterComponent />
                        </div>

                        <script
                            src="https://cdn.dialogapi.no/form.min.js"
                            crossOrigin="anonymous"
                            async
                            defer
                        ></script>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
