import {FC} from "react";
import {Layout} from "@/app/components/layout/Layout";
import {Meta} from "@/app/utils/meta";
import {Heading} from "@/app/components/ui/heading/Heading";
import {toastr} from "react-redux-toastr";

export const Home: FC = () => {
  return (
    <Meta
      title={'Watch movies'}
      description={'Watch MovieApp movies and TV shows online'}
    >
      <Heading title={'Watch movies online'} className={'text-gray-500 mb-8 text-xl'} />

      <button onClick={() => toastr.success('Auth', "succes")}>sads</button>
    </Meta>
  )
}