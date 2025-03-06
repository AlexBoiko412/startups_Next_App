import {auth, signIn, signOut} from "@/auth";
import Link from "next/link";
import Image from "next/image";

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
                            Create
                        </Link>

                        <form action={async () => {
                            "use server";
                            await signOut({redirectTo: "/"})
                        }}>
                            <button type="submit">
                                Log Out
                            </button>
                        </form>

                        <Link href={`/user/${session?.id}`}>
                            <span>{session?.user?.name}</span>
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