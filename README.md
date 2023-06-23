The provided code represents a React application for managing a list of friends and splitting bills with them. It consists of several components:

App: The main component that serves as the entry point of the application. It manages the state of friends, selected friend, and the visibility of the "Add Friend" form. It renders the sidebar, which includes the FriendsList component, the "Add Friend" button, and potentially the FormAddFriend component. It also renders the FormSplitBill component when a friend is selected.

FriendsList: Renders a list of friends using the Friend component. It receives the list of friends, the selected friend, and a callback function to handle friend selection.

Friend: Represents an individual friend in the FriendsList. It displays the friend's name, balance, and an image. The selected friend is highlighted, and the button text changes between "Select" and "Close" depending on the selection status.

FormAddFriend: Renders a form for adding a new friend. It includes input fields for entering the friend's name and image URL. The form submission triggers the creation of a new friend object, which is then added to the friends list through the onAddFriend callback.

FormSplitBill: Displays a form for splitting a bill with a selected friend. It shows the selected friend's name and provides input fields for entering the bill value and the user's and friend's expenses. It also includes a dropdown menu for selecting who will pay the bill. A "Split Bill" button is available for submitting the form.

Button: A reusable button component that can be used throughout the application. It receives a callback function for the onClick event and renders a button with the provided text.


