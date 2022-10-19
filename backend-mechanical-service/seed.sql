USE `Mechanical_Services`;

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `users`;

TRUNCATE TABLE `mechanical`;

TRUNCATE TABLE `services`;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO
    Mechanical_Services.users (name, email, phone, endereco)
VALUES (
        "Lucas",
        "lucas@test.com",
        "123456789",
        "Naquele lugar"
    ), (
        "Lucas2",
        "lucas@test.com2",
        "1234567892",
        "Naquele lugar2"
    ), (
        "Lucas3",
        "lucas@test.com3",
        "1234567893",
        "Naquele lugar3"
    );

INSERT INTO
    Mechanical_Services.mechanical (
        name,
        email,
        autonomous,
        mechanical_workshop
    )
VALUES (
        'Glove',
        'mecanico@test.com',
        TRUE
    ), (
        'Romário',
        'mecanico@test.com',
        FALSE,
        'Beco do Carro'
    );

INSERT INTO
    Mechanical_Services.services (user_id, mechanical_id)
VALUES (1, 1, 5), (1, 2, 10), (2, 3, 15);