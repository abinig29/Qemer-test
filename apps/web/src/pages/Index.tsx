import { GraduationCap, UserPlus } from "lucide-react"
import { Link } from "react-router-dom"

export default function IndexPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl ">
                <div className="flex flex-col sm:flex-row gap-4 w-full ">
                    <Link to="/dashboard" className="flex-1">
                        <button
                            className="w-full bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            <div className="flex items-center justify-center space-x-4">
                                <GraduationCap className="w-8 h-8 text-indigo-600" />
                                <span className="text-lg font-medium text-gray-800">Student List</span>
                            </div>
                        </button>
                    </Link>
                    <Link to="/studentRegistration" className="flex-1">
                        <button
                            className="w-full bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            <div className="flex items-center justify-center space-x-4">
                                <UserPlus className="w-8 h-8 text-pink-600" />
                                <span className="text-lg font-medium text-gray-800">Create Student</span>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}