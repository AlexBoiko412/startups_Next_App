import {auth, signIn, signOut} from "@/auth";
import Link from "next/link";
import Image from "next/image";
import {BadgePlus, LogOut} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export const Navbar = async () => {
    const session = await auth();

    return (
        <header className={"flex justify-between items-center px-20 py-2 font-work-sans bg-black shadow-navbar relative z-100"}>
            <Link href={"/"}>
                <Image
                    alt={"Logo"}
                    width={100}
                    height={10}
                    src={"/logo.png"}
                ></Image>
            </Link>



            <div className="flex items-center gap-6 text-white">
                {session && session?.user ? (
                    <>
                        <Link href={"/startup/create"}>
                            <span className="max-sm:hidden">Create</span>
                            <BadgePlus className="size-6 sm:hidden" />
                        </Link>

                        <form action={async () => {
                            "use server";
                            await signOut({redirectTo: "/"})
                        }}
                            className={"flex items-center"}
                        >
                            <button type="submit">
                                <span className="max-sm:hidden">Logout</span>
                                <LogOut className="size-6 sm:hidden text-white" />
                            </button>
                        </form>

                        <Link href={`/user/${session?.id}`}>
                            <Avatar className="size-10">
                                <AvatarImage
                                    src={session?.user?.image || ""}
                                    alt={session?.user?.name || ""}
                                />
                                <AvatarFallback>{session?.user?.name}</AvatarFallback>
                            </Avatar>
                        </Link>
                    </>)
                    :
                    (
                    <>
                        <form action={async () => {
                            "use server"

                            await signIn("github")
                        }}>
                            <button type={"submit"}>
                                Sign In
                            </button>
                        </form>
                    </>
                    )



                }
            </div>
        </header>
    )
}