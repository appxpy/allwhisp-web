import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ReactTypingEffect from "react-typing-effect";
import VerificationInput from "react-verification-input";
import Countdown from "react-countdown";

export const Secret = () => {
    const [open, setOpen] = useState(false);
    const [code, setCode] = useState("");
    const date = new Date();

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const validateCode = () => {
        if (code === "1234") {
            alert("Тут будет инфа какая-то");
        } else {
            alert(
                "Не правильный код! Но я тут обманул, попыток бесконечно, но перебирать не интересно(("
            );
        }
    };

    return (
        <>
              <a
                  className="flex items-center gap-1 group cursor-pointer"
                  onClick={onOpenModal}
              >
            <span
                className="m-0 p-0 text-primary group-hover:opacity-60 text-base font-medium leading-4 flex items-center no-underline lowercase select-none transition-opacity duration-300">
              ???
            </span>
                  <div className="flex justify-center items-center w-12 h-12">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                           stroke="currentColor" className="w-6 h-6 group-hover:opacity-60">
                          <path strokeLinecap="round" strokeLinejoin="round"
                                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
                      </svg>

                  </div>
              </a>
            <Modal
                open={open}
                onClose={onCloseModal}
                center
                classNames={{
                    modalContainer:
                        "w-full h-full flex items-center justify-center",
                    modal: "flex flex-col w-[500px] bg-gray-950 rounded-md text-gray-100 border-gray-700 border-solid border-[1px]",
                }}
                closeIcon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10 border-gray-700 border-solid border-[1px] p-2 rounded-md"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                }
            >
                {date.getDate() == 8 && date.getMonth() == 2 ? (
                    <div className={"flex flex-col p-5 gap-4"}>
                        <h2 className="text-3xl font-medium">Вход</h2>
                        <ReactTypingEffect
                            className={
                                "text-base font-normal leading-5 opacity-40 pt-5"
                            }
                            text={[
                                `Из-за повышенной пользовательской активности (1 человек раз в день это слишком много), система активировала протокол "Засохшие козявки". Пожалуйста подтвердите вашу личность для доступа к необходимой информации, для этого введите код.`,
                            ]}
                            speed={5}
                            eraseDelay={9999999999}
                        />
                        <VerificationInput
                            length={4}
                            onChange={setCode}
                            classNames={{
                                container: "flex w-[224px] mx-auto",
                                character: "rounded-md bg-gray-300",
                            }}
                        />

                        <button
                            onClick={validateCode}
                            className={
                                "mt-2 h-10 rounded-md bg-red-600 text-primary text-lg font-medium"
                            }
                        >
                            Войти (осталась 1 попытка)
                        </button>
                    </div>
                ) : (
                    <Countdown
                        precision={10}
                        intervalDelay={10}
                        date={Date.UTC(2024, 2, 7, 21, 0, 0, 0)}
                        renderer={(props) => {
                            return (
                                <div className={"flex flex-row gap-2"}>
                                    <div className={"flex flex-col gap-2"}>
                                        <span
                                            className={
                                                "text-2xl font-bold w-full text-center"
                                            }
                                        >
                                            {props.days}
                                        </span>
                                        <span
                                            className={
                                                "text-sm font-medium w-full text-center text-gray-600"
                                            }
                                        >
                                            Days
                                        </span>
                                    </div>
                                    <div className={"flex flex-col gap-2"}>
                                        <span
                                            className={
                                                "text-2xl font-bold w-full text-center"
                                            }
                                        >
                                            {props.hours}
                                        </span>
                                        <span
                                            className={
                                                "text-sm font-medium w-full text-center text-gray-600"
                                            }
                                        >
                                            Hours
                                        </span>
                                    </div>
                                    <div className={"flex flex-col gap-2"}>
                                        <span
                                            className={
                                                "text-2xl font-bold w-full text-center"
                                            }
                                        >
                                            {props.minutes}
                                        </span>
                                        <span
                                            className={
                                                "text-sm font-medium w-full text-center text-gray-600"
                                            }
                                        >
                                            Minutes
                                        </span>
                                    </div>
                                    <div className={"flex flex-col gap-2"}>
                                        <span
                                            className={
                                                "text-2xl font-bold w-full text-center"
                                            }
                                        >
                                            {props.seconds}
                                        </span>
                                        <span
                                            className={
                                                "text-sm font-medium w-full text-center text-gray-600"
                                            }
                                        >
                                            Seconds
                                        </span>
                                    </div>
                                    <div className={"flex flex-col gap-2 w-16"}>
                                        <span
                                            className={
                                                "text-2xl font-bold w-full text-center"
                                            }
                                        >
                                            {props.milliseconds}
                                        </span>
                                        <span
                                            className={
                                                "text-sm font-medium w-full text-center text-gray-600"
                                            }
                                        >
                                            Ms
                                        </span>
                                    </div>
                                </div>
                            );
                        }}
                    />
                )}
            </Modal>
        </>
    );
};
