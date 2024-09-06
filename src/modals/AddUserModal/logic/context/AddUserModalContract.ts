import { User } from "../../../../types/users";

export interface AddUserModalContract {
    newUser: User;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
    onClose: () => void;

    
}