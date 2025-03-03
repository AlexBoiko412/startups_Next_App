"use client"


import {Input} from "@/components/ui/input";
import {useActionState, useState} from "react";
import {Textarea} from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor"
import {Button} from "@/components/ui/Button";
import {startupSchema} from "@/lib/validation";
import {ZodError} from "zod";


const initialState = {
    message: "",
    status: "Init"
}

const CreateStartupForm = () => {

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [state, action, isPending] = useActionState(createStartup, initialState)
    const [pitch, setPitch] = useState("**Hello world!**")


    async function createStartup(prevState: any, formData: FormData) {
        try {
            const formDataValues  = {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                startup: formData.get("startup") as string,

                link: formData.get("link") as string,
                pitch: pitch,
            }

            await startupSchema.parseAsync(formDataValues)

            // const result = await createIdea(prevState, formData, pitch)

            // console.log(result)
        } catch (e) {
            if(e instanceof ZodError) {
                const fieldErrors = e.flatten().fieldErrors

                setErrors(fieldErrors as unknown as Record<string, string>)

                return {
                    ...prevState,
                    message: "Input Error",
                    status: "ERROR"
                }
            }
            return {
                ...prevState,
                message: "Unexpected Error",
                status: "ERROR"
            }
        } finally {

        }
    }

    return (
        <form
            action={() => {}}
            onClick={(e) => e.preventDefault()}
            className={"flex flex-col gap-10"}
        >
            <div>
                <label
                    htmlFor="title"
                    className=""
                >
                    Title
                </label>
                <Input
                    required
                    id="title"
                    name="title"
                    className=""
                    placeholder={"Title"}
                />
                {errors.title && <p>{errors.title}</p>}
            </div>

            <div>
                <label
                    htmlFor="description"
                    className=""
                >
                    Description
                </label>
                <Textarea
                    required
                    id="description"
                    name="description"
                    className=""
                    placeholder={"Description"}
                />
                {errors.description && <p>{errors.description}</p>}
            </div>
            <div>
                <label
                    htmlFor="category"
                    className=""
                >
                    Category
                </label>
                <Input
                    required
                    id="category"
                    name="category"
                    className=""
                    placeholder={"Category"}
                />
                {errors.category && <p>{errors.category}</p>}
            </div>
            <div>
                <label
                    htmlFor="link"
                    className=""
                >
                    Link
                </label>
                <Input
                    required
                    id="link"
                    name="link"
                    className=""
                    placeholder={"Link"}
                />
                {errors.link && <p>{errors.link}</p>}
            </div>
            <div>
                <label
                    htmlFor="pitch"
                    className=""
                >
                    Pitch
                </label>
                <MDEditor
                    data-color-mode={"light"}
                    value={pitch}
                    onChange={(value, event) => {
                        setPitch(value || "")
                    }}
                    style={{ borderRadius: "6px", overflow: "hidden" }}
                    id={"pitch"}
                    preview={"edit"}
                    height={300}
                    textareaProps={{
                        placeholder: "Describe Your Project",
                    }}
                    previewOptions={{
                        disallowedElements: ["style"]
                    }}
                />
                {errors.pitch && <p>{errors.pitch}</p>}
            </div>


            <div className="flex justify-center">
                <Button
                    type={"submit"}
                    className={"text-3xl p-6"}
                    disabled={isPending}
                >
                    {isPending
                        ? "Sending..."
                        : "Publish"
                    }
                </Button>
            </div>

        </form>
    );
};

export default CreateStartupForm;