"use client"


import {Input} from "@/components/ui/input";
import {useActionState, useState} from "react";
import {Textarea} from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor"
import {Button} from "@/components/ui/Button";


const initialState = {
    message: ""
}

const CreateStartupForm = () => {


    const [state, action, isPending] = useActionState<Record<string, string>, FormData>(createStartup, initialState)
    const [pitch, setPitch] = useState("**Hello world!**")


    async function createStartup(state: Record<string, string>, formData: FormData) {
        return {

        }
    }

    return (
        <form
            action={() => {}}
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
                {state.title && <p>{state.title}</p>}
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
                {state.description && <p>{state.description}</p>}
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
                {state.category && <p>{state.category}</p>}
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
                {state.link && <p>{state.link}</p>}
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
                {state.pitch && <p>{state.pitch}</p>}
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