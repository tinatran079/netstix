steps = [

        [
        # "Up" SQL statement
        """
        CREATE TABLE Accounts (
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(20) NOT NULL,
            hashed_password VARCHAR(20) NOT NULL,
            email VARCHAR(255) NOT NULL

        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE Accounts;
        """
    ],

    [
        # "Up" SQL statement
        """
        CREATE TABLE Users (
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(20) NOT NULL,
            password VARCHAR(20) NOT NULL,
            email VARCHAR(255) NOT NULL,
            account_id INTEGER NOT NULL REFERENCES Accounts("id") ON DELETE CASCADE

        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE Users;
        """
    ],


    [
        # "Up" SQL statement
        """
        CREATE TABLE Reviews (
            id SERIAL PRIMARY KEY NOT NULL,
            subject VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            user_id INTEGER NOT NULL REFERENCES Users("id") ON DELETE CASCADE,
            game_id INTEGER NOT NULL,
            game_title VARCHAR(255) NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE Reviews;
        """
    ]
]
