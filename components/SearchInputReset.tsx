"use client"

import React, {HTMLProps, ReactNode, useEffect} from 'react';
import {X } from 'lucide-react'
import Link from "next/link";

const SearchInputReset = ({className}: {className?: string}) => {
    const reset = () => {
        const form = document.querySelector(".search-form") as HTMLFormElement

        form.reset();
    }

    return (
        <div className={`hover:text-black-200  mx-2 ${className}`} onClick={reset}>
            <Link href={"/"}><X /></Link>
        </div>

    );
};

export default SearchInputReset;