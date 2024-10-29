import StudentRegistrationForm from "@/components/student/student-registration-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function StudentRegistration() {
    return (
        <div className="container mx-auto p-4">
            <Link to="/">
                <Button variant="ghost" className="mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
            </Link>
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl">Student Registration</CardTitle>
                    <CardDescription>Register as a new student by filling out the form below</CardDescription>
                </CardHeader>
                <CardContent>
                    <StudentRegistrationForm />
                </CardContent>
            </Card>
        </div>
    );
}
