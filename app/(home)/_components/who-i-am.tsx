import { HomeIcon, MapsIcon, TecnicIcon, WebIcon } from "./Icons";
import * as motion from "framer-motion/client";

interface cardStoryProps {
    Children: React.ReactNode;
    text: string;
}
const WhoStory: cardStoryProps[] = [
    {
        Children: <WebIcon className="mx-auto  w-10  md:w-20" />,
        text: "junior web",
    },
    {
        Children: <TecnicIcon className="mx-auto  w-10  md:w-20" />,
        text: "tecnico pc smartphone tablet",
    },
    {
        Children: <MapsIcon className="mx-auto  w-10  md:w-20" />,
        text: "italiano",
    },
    {
        Children: <HomeIcon className="mx-auto  w-10  md:w-20" />,
        text: "sede o remoto",
    },
];

export const WhoIam = () => {
    return (
        <section className=" my-4 ">
            <h2 className="mb-5 text-2xl font-bold uppercase">Chi sono</h2>
            <div className="flex  justify-evenly gap-3 text-center uppercase  ">
                {WhoStory &&
                    WhoStory.map((el, _) => (
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                delay: parseFloat(`.${_}`),
                            }}
                            key={_}
                            className="w-auto rounded border-b-4 border-black "
                        >
                            {el.Children}
                            <p className="text-lg">{el.text}</p>
                        </motion.div>
                    ))}
            </div>
        </section>
    );
};
