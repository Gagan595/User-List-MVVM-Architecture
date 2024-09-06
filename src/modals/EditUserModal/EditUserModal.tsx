import { EditUserModalLogic } from "./logic";
import { EditUserModalView } from "./view";

export const EditUserModal: React.FC<React.PropsWithChildren> = () => {
  return (
    <EditUserModalLogic>
      <EditUserModalView />
    </EditUserModalLogic>
  );
};
