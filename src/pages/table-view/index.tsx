import TView from "@/components/TView";
import ViewsHero from "@/components/ViewsHero";
import { Container } from "@mantine/core";

export default function TableView(){
    return (
        <>
      <Container className="flex items-center justify-center md:mt-[4rem] md:mx-3 mt-32 lg:mx-auto overflow-hidden mb-10 p-0 mx-5 text-center bg-violet-200/10 rounded-lg">
{/* <div className="flex items-center justify-center py-5">
      </div> */}
<ViewsHero/>

        </Container>
            <TView/>
        </>
    )
}