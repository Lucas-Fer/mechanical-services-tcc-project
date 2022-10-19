USE `Mechanical_Services`;

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE `users`;

TRUNCATE TABLE `mechanical`;

TRUNCATE TABLE `services`;

TRUNCATE TABLE `mechanical_service`;

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
        TRUE,
        NULL
    ), (
        'Romário',
        'mecanico@test.com',
        FALSE,
        'Beco do Carro'
    );

INSERT INTO
    Mechanical_Services.services (
        user_id,
        description,
        car_model,
        car_brand,
        car_year
    )
VALUES (
        1,
        'deu ruim aqui nessa bagaça',
        'CG150 FAN ESDI',
        'HONDA',
        '2010'
    ), (
        2,
        'bagaçado',
        'Fiat Argo',
        'FIAT',
        '2023'
    );

INSERT INTO
    Mechanical_Services.mechanical_service (
        mechanical_id,
        service_id,
        status_service
    )
VALUES (2, 1, 'DONE'), (1, 2, 'PROGRESS');