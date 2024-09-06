---

# User Management App

This project is a user management application following the **MVVM** (Model-View-ViewModel) architecture. It is built using **React**, **TypeScript**, **Styled Components**, and **Redux** for state management. The app also supports light and dark themes with a centralized theming system.

## Project Architecture

### MVVM Architecture

The application follows the MVVM pattern, keeping the business logic and view (UI) separate. Below is how the structure is organized:

- **Model**: Represents the data layer (in this case, managed by Redux).
- **ViewModel (Logic)**: Handles application logic, such as managing state and actions.
- **View**: Handles the presentation of the data and interacts with the ViewModel through context.

For example, in the `AddUserModal`, you will find the following structure:

```
src/
  └── components/
      └── AddUserModal/
          ├── logic/
          │    ├── AddUserModalContext.tsx
          │    └── AddUserModalLogic.tsx
          ├── view/
          │    └── AddUserModalView.tsx
          └── index.tsx
```

### File Patterns and Their Uses

1. **Logic Folder (`/logic`)**:
   - Contains logic-related files such as context providers, hooks, and state handling.
   - **Example**: `AddUserModalLogic.tsx` handles user form submission and manages state for user inputs.
   - **Context**: `AddUserModalContext.tsx` is responsible for passing the logic functions to the view using React Context.

2. **View Folder (`/view`)**:
   - Contains the UI components that render data provided by the logic layer.
   - **Example**: `AddUserModalView.tsx` contains form fields and the user interface for adding a user, receiving data and event handlers from the context.

3. **Index.ts**:
   - Barrel exports are used in here. 

### Centralized Theming

The app supports both **light** and **dark** themes using a centralized theming system powered by **Styled Components**. The theme is toggleable, and the entire app's styles adapt accordingly to the selected theme. The centralized theme object contains color definitions for both modes, ensuring consistent styling across all components.

### TypeScript

This project makes heavy use of **TypeScript** to provide type safety, improving code quality and reducing runtime errors. All logic, components, and context have defined types for props, state, and return values.

```

### Features

1. **MVVM Architecture**: Separates logic (ViewModel) and presentation (View), making the code more maintainable and scalable.
2. **Styled Components**: All styling is handled using styled components, with support for centralized theming (dark/light modes).
3. **Redux for State Management**: Global state is managed using **Redux** for scalability and ease of data flow.
4. **TypeScript Integration**: Provides type safety across components, logic, and context.
5. **Toast Notifications**: **react-toastify** is used for success and error notifications when users are added or edited.
---
