import prisma from "@libs/prisma"
import { GetServerSidePropsContext } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default ({url}:any) => {
  const { push } = useRouter()
  useEffect(() => {
    if (url) {
      push(url.url)
  }})
  return (
<div className="flex items-center justify-center h-screen w-screen">
    <p className="text-6xl text-purple-600 font-extrabold">{url?"Redirecting...":"404 | Page Not Found"}</p>
</div>
)}

export const getServerSideProps = async (context:GetServerSidePropsContext) => {
  const { id } = context.query
  const url = await prisma.uRL.findUnique({
    where: {
      id: String(id)
    }
  })
  return {
    props: {
      url
    }
  }
}