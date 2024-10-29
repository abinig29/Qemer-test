// src/components/StudentRegistrationForm.tsx

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { registrationSchema, RegistrationType } from "@/lib/validation/student.validation";
import { ICourse, IStudent } from "@/types/db";
import { useFetchData } from "@/hooks/use-query";
import { KY, MTD } from "@/lib/constant";
import { Res } from "@/types/res";
import useMutationFunc from "@/hooks/use-mutation";
import { updateLocalData } from "@/lib/updateLocal";
import useCustomSearchParams from "@/hooks/use-table-searchparam";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";



export default function StudentRegistrationForm({ student, onStudentCreate }: { student?: IStudent, onStudentCreate?: () => void }) {

    const { isLoading: courseLoading, data, error, isSuccess } = useFetchData<ICourse[]>(
        [KY.course],
        `course`,
    );

    const form = useForm<RegistrationType>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            name: student ? student?.name : "",
            age: student ? student?.age : undefined,
            phoneNumber: student ? student?.phoneNumber : "",
            email: student ? student?.email : "",
            course: student ? student?.course?._id : "",
        },
    });
    const ToastDescription = student ? `Student with name ${student?.name} has been edited` : `Student with name ${form.watch("name")} has been edited`


    const queryClient = useQueryClient()
    const { query } = useCustomSearchParams("name")

    const {
        isPending,
        mutateAsync
    } = useMutationFunc({
        onSuccess: (newData: IStudent) => {
            console.log({ newData })
            form.reset()
            toast({
                variant: "default",
                title: student ? "Student Updated" : "Student Created",
                description: ToastDescription

            })
            !student ?
                updateLocalData<IStudent>(
                    MTD.POST,
                    KY.student,
                    query,
                    queryClient,
                    { ...newData },
                ) :
                updateLocalData<IStudent>(
                    MTD.PATCH,
                    KY.student,
                    query,
                    queryClient,
                    { ...newData },
                    student?._id ?? ""
                )
            onStudentCreate?.()
        },
        onError: (data) => {
            // errorNoAction(data?.message)
        },
    });



    const onSubmit = async (data: RegistrationType) => {
        try {
            await mutateAsync({
                url: !student ? `student` : `student/${student?._id}`,
                method: !student ? MTD.POST : MTD.PATCH,
                body: data,

            });
        } catch (e: any) {
            console.log(e.message);
        }
    };



    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Age</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your age"
                                    type="number"
                                    {...field}
                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Course</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Courses" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        data?.map(course => {
                                            return <SelectItem
                                                value={course?._id ?? ""}>
                                                {course?.courseName}
                                            </SelectItem>
                                        })
                                    }
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    isLoading={isPending}
                    type="submit" className="w-full">
                    {student ? "Update Student" : "Register"}
                </Button>
            </form>
        </Form>

    );
}
