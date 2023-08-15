'use client'

import getData from "@/lib/firebase/getData"
import { useEffect, useState } from "react";

import {DocumentData} from "firebase/firestore"

export default function Page() {
    const [project, setProject] = useState<DocumentData | undefined>();

    useEffect(() => {
      getData("projects", "cL3cwbg5ReKN6A9L8SRV").then(
        (res) => {
          console.log(res.result?.data())
          setProject(res.result?.data())
        }
      ).catch(
        (error) => {
          console.error(error)
        }
      )
    }, [])

    return (
      <h1>Hello Projects!</h1>
    )
  }
  