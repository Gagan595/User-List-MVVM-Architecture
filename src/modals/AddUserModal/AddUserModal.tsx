import { AddUserModalLogic } from "./logic";
import { AddUserModalView } from "./view";

export const AddUserModal: React.FC<React.PropsWithChildren> = () => {
  return (
    <AddUserModalLogic>
      <AddUserModalView />
    </AddUserModalLogic>
  );
};
