steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE Games (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            background_image TEXT NOT NULL,
            rating NUMERIC NOT NULL,
            platforms TEXT ARRAY,
            developer TEXT,
            generes TEXT ARRAY


        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE Games;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE big_dummy (
            id SERIAL PRIMARY KEY NOT NULL,
            required_limited_text VARCHAR(1000) NOT NULL,
            required_unlimited_text TEXT NOT NULL,
            required_date_time TIMESTAMP NOT NULL,
            automatically_set_date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            required_integer INTEGER NOT NULL,
            required_money MONEY NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE big_dummy;
        """
    ]
]
