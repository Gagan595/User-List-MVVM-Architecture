import { UsersListPageLogic } from "./logic";
import { UsersListPageView } from "./view/UsersListPageView";

export const UsersListPage: React.FC<React.PropsWithChildren> = () => {
  return (
    <UsersListPageLogic>
      <UsersListPageView />
    </UsersListPageLogic>
  );
};
