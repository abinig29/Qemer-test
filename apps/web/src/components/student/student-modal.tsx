import { Modal } from '@/components/ui/modal'
import { IStudent } from '@/types/db'
import StudentRegistrationForm from './student-registration-form'


const StudentModal = ({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data?: IStudent }) => {

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                title='Student Detail'
                // className='h-[470px]'
            >
                <StudentRegistrationForm
                    student={data}
                    onStudentCreate={onClose}
                />
            </Modal>
        </div >
    )
}

export default StudentModal