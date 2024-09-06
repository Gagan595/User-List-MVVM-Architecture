import { User } from "../../../../types/users";

export interface EditUserModalContract {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  onClose: () => void;
  user: User | null;

}
