import { User } from "../../../../types/users";

export interface UsersListPageContract {
  users: User[];
  filteredUsers: User[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  onClickAddButton: () => void;
  onClickEditButton: (userId: number) => void;
  isAddUserModalOpen: Boolean;
  isEditUserModalOpen: Boolean;
}
