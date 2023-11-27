import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useElementSize } from "usehooks-ts";

import Button from "../components/common/Button";
import Container from "../components/common/Container";
import FormControl from "../components/form/FormControl";
import InputField from "../components/form/InputField";
import Label from "../components/form/Label";
import MultiSelectField from "../components/form/MultiSelectField";
import SelectField from "../components/form/SelectField";
import TextboxField from "../components/form/TextboxField";
import { isFieldError, log } from "../utils/general";
import type { VisaForm } from "../validators/form";
import { visaFormSchema } from "../validators/form";
import bannerImg1 from "@/public/images/banner-image-1.png";
import bannerImg2 from "@/public/images/banner-image-2.png";
import countries from "@/src/data/countries.json";

const FORM_FIELDS = {
    name: "name",
    email: "email",
    walletAddress: "walletAddress",
    discordId: "discordId",
    discovery: "discovery",
    country: "country",
    projectDetails: "projectDetails",
    expectation: "expectation",
    skills: "skills",
    expectationDetails: "expectationDetails",
} as const;

const DISCOVERY_OPTIONS = [
    { label: "Twitter", value: "Twitter" },
    {
        label: "Newsletter",
        value: "Newsletter",
    },
    {
        label: "A Friend",
        value: "A Friend",
    },
    {
        label: "Other",
        value: "Other",
    },
];

const EXPECTATION_OPTIONS = [
    { label: "Experience the community", value: "Experience the community" },
    {
        label: "Purchase a Dean's List service",
        value: "Purchase a Dean's List service",
    },
    {
        label: "Propose a workshop idea",
        value: "Propose a workshop idea",
    },
    {
        label: "Connect us with a client",
        value: "Connect us with a client",
    },
];

const SKILL_OPTIONS = [
    { label: "Frontend Development", value: "Frontend Development" },
    { label: "Backend Development", value: "Backend Development" },
    { label: "Full Stack Development", value: "Full Stack Development" },
    { label: "App Development", value: "App Development" },
    { label: "Marketing", value: "Marketing" },
    { label: "UI/UX Design", value: "UI/UX Design" },
    { label: "Accounting", value: "Accounting" },
    { label: "Record Keeping", value: "Record Keeping" },
];

const COUNTRY_OPTIONS = countries.map((country) => ({
    label: country.name,
    value: country.name,
}));

const HomePage = () => {
    const [bannerRef, { width }] = useElementSize();

    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
    } = useForm<VisaForm>({
        resolver: zodResolver(visaFormSchema),
    });

    const formSubmitHandler = (data: VisaForm) => {
        log("Form submitted =>", data);
    };

    return (
        <div className="bg h-screen">
            <section
                id="banner"
                className="relative px-4 pb-10 pt-4"
                ref={bannerRef}
            >
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="flex items-center justify-center">
                        <Image
                            src={bannerImg1}
                            alt="banner-image-1"
                            width={width / 3}
                            style={{
                                maxWidth: 400,
                                maxHeight: 410,
                            }}
                            className="hidden md:block"
                        />
                    </div>

                    <div className="mx-4 flex flex-grow flex-col justify-center space-y-3 text-center text-primary-1 sm:space-y-6">
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl">
                            DEAN&apos;S LIST DAO
                        </h1>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl">
                            BUSINESS VISA
                        </h2>
                    </div>

                    <div className="flex items-center justify-center">
                        <Image
                            src={bannerImg2}
                            alt="banner-image-2"
                            width={width / 3}
                            style={{
                                maxWidth: 330,
                                maxHeight: 280,
                            }}
                            className="hidden md:block"
                        />
                    </div>
                </div>

                <div className="absolute -bottom-4 left-0 right-0 flex justify-center sm:-bottom-6 md:-bottom-8">
                    <div className="rounded-2xl bg-white p-2 text-center text-black sm:p-3 md:p-4">
                        <h3 className="text-sm font-medium sm:text-lg md:text-2xl lg:text-3xl">
                            Dean&apos;s List Business Visa Application Form
                        </h3>
                    </div>
                </div>
            </section>

            <div className="h-full bg-background-1 py-16 sm:py-24">
                <Container className="pb-20">
                    <form
                        className="mx-auto flex max-w-lg flex-col space-y-10"
                        onSubmit={handleSubmit(formSubmitHandler)}
                    >
                        <FormControl
                            isError={isFieldError(errors?.name)}
                            errorMessage={errors?.name?.message}
                        >
                            <Label
                                htmlFor={FORM_FIELDS.name}
                                className="text-lg"
                            >
                                What is your name?
                            </Label>
                            <InputField
                                id={FORM_FIELDS.name}
                                placeholder="Ex. John Doe"
                                {...register(FORM_FIELDS.name)}
                            />
                        </FormControl>

                        <FormControl
                            isError={isFieldError(errors?.email)}
                            errorMessage={errors?.email?.message}
                        >
                            <Label
                                htmlFor={FORM_FIELDS.email}
                                className="text-lg"
                            >
                                An email we contact you with
                            </Label>
                            <InputField
                                id={FORM_FIELDS.email}
                                placeholder="Ex. johndoe@gmail.com"
                                {...register(FORM_FIELDS.email)}
                            />
                        </FormControl>

                        <FormControl
                            isError={isFieldError(errors?.walletAddress)}
                            errorMessage={errors?.walletAddress?.message}
                        >
                            <Label
                                htmlFor={FORM_FIELDS.walletAddress}
                                className="text-lg"
                            >
                                Your Solana wallet address (To receive payment
                                for your work)
                            </Label>
                            <InputField
                                id={FORM_FIELDS.walletAddress}
                                placeholder="Ex. Amx7mPH5N99rtfwF91uvE8BJpsaXQzH7VaafZJSvUJbo"
                                {...register(FORM_FIELDS.walletAddress)}
                            />
                        </FormControl>

                        <FormControl
                            isError={isFieldError(errors?.discordId)}
                            errorMessage={errors?.discordId?.message}
                        >
                            <Label
                                htmlFor={FORM_FIELDS.discordId}
                                className="text-lg"
                            >
                                What is your Discord username?
                            </Label>
                            <InputField
                                id={FORM_FIELDS.discordId}
                                placeholder="Ex. johndoe"
                                {...register(FORM_FIELDS.discordId)}
                            />
                        </FormControl>

                        <FormControl
                            isError={isFieldError(errors?.discovery)}
                            errorMessage={errors?.discovery?.message}
                        >
                            <Label
                                htmlFor={FORM_FIELDS.discovery}
                                className="text-lg"
                            >
                                How did you discover Dean&apos;s List?
                            </Label>
                            <SelectField
                                id={FORM_FIELDS.discovery}
                                placeholder="Select an option"
                                options={DISCOVERY_OPTIONS}
                                onSelectOption={(option) => {
                                    setValue(
                                        FORM_FIELDS.discovery,
                                        option?.value as string
                                    );
                                }}
                            />
                        </FormControl>

                        <FormControl
                            isError={isFieldError(errors?.country)}
                            errorMessage={errors?.country?.message}
                        >
                            <Label
                                htmlFor={FORM_FIELDS.country}
                                className="text-lg"
                            >
                                Which country are you from?
                            </Label>
                            <SelectField
                                id={FORM_FIELDS.country}
                                placeholder="Select an option"
                                options={COUNTRY_OPTIONS}
                                onSelectOption={(option) => {
                                    setValue(
                                        FORM_FIELDS.country,
                                        option?.value as string
                                    );
                                }}
                            />
                        </FormControl>

                        <FormControl
                            isError={isFieldError(errors?.projectDetails)}
                            errorMessage={errors?.projectDetails?.message}
                        >
                            <Label
                                htmlFor={FORM_FIELDS.projectDetails}
                                className="text-lg"
                            >
                                Do you have a project? (If &quot;yes,&quot;
                                Paste Twitter, Discord Links Here)
                            </Label>
                            <TextboxField
                                id={FORM_FIELDS.projectDetails}
                                placeholder="Ex. https://twitter.com/DeansListDAO"
                                {...register("projectDetails")}
                            />
                        </FormControl>

                        <FormControl
                            isError={isFieldError(errors?.expectation)}
                            errorMessage={errors?.expectation?.message}
                        >
                            <Label
                                htmlFor={FORM_FIELDS.expectation}
                                className="text-lg"
                            >
                                What do you expect from/after your Visa?
                            </Label>
                            <SelectField
                                id={FORM_FIELDS.expectation}
                                placeholder="Select an option"
                                options={EXPECTATION_OPTIONS}
                                onSelectOption={(option) => {
                                    setValue(
                                        FORM_FIELDS.expectation,
                                        option?.value as string
                                    );
                                }}
                            />
                        </FormControl>

                        <FormControl
                            isError={isFieldError(errors?.skills)}
                            errorMessage={errors?.skills?.message}
                        >
                            <Label
                                htmlFor={FORM_FIELDS.skills}
                                className="text-lg"
                            >
                                What do you expect from/after your Visa?
                            </Label>
                            <MultiSelectField
                                id={FORM_FIELDS.skills}
                                placeholder="Select an option"
                                options={SKILL_OPTIONS}
                                onSelectOption={(option) => {
                                    setValue(
                                        FORM_FIELDS.skills,
                                        option as string[]
                                    );
                                }}
                            />
                        </FormControl>
                        <FormControl
                            isError={isFieldError(errors?.expectationDetails)}
                            errorMessage={errors?.expectationDetails?.message}
                        >
                            <Label
                                htmlFor={FORM_FIELDS.expectationDetails}
                                className="text-lg"
                            >
                                What do you expect from/after your Visa?
                                (Elaborate Here as much as possible.)
                            </Label>
                            <TextboxField
                                id={FORM_FIELDS.expectationDetails}
                                placeholder="Ex. I want to work on a project with Dean's List DAO."
                                {...register("projectDetails")}
                            />
                        </FormControl>
                        <Button type="submit">Submit</Button>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default HomePage;
