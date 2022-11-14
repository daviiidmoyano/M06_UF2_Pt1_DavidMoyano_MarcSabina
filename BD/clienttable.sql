-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-11-2022 a las 12:37:50
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `m06_uf2_pt1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clienttable`
--

CREATE TABLE `clienttable` (
  `DNI` varchar(9) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Account Type` varchar(50) NOT NULL,
  `Amount` int(50) NOT NULL,
  `Client Type` varchar(50) NOT NULL,
  `Entry date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clienttable`
--

INSERT INTO `clienttable` (`DNI`, `Name`, `Account Type`, `Amount`, `Client Type`, `Entry date`) VALUES
('10000001S', 'Client 1', 'Fixed deposit account', 126207, 'Very rich client', '2018-04-15'),
('10000002Q', 'Client 2', 'Solidary account', 148293, 'Very rich client', '2018-10-24'),
('10000003V', 'Client 3', 'Personal account', 54167, 'Normal client', '2018-01-30'),
('10000004H', 'Client 4', 'Tax-Free Savings Account', 120652, 'Very rich client', '2018-09-24'),
('10000005L', 'Client 5', 'Savings account', 83238, 'Normal client', '2018-06-03'),
('10000006C', 'Client 6', 'Solidary Account', 100029, 'Very rich client', '2018-02-22'),
('10000007K', 'Client 7', 'Savings account', 23226, 'Normal Client', '2018-01-05'),
('10000008E', 'Client 8', 'Tax-Free Savings Account', 14870, 'Normal client', '2018-10-02'),
('10000009T', 'Client 9', 'Personal account', 118301, 'Very rich client', '2018-05-21'),
('10000010R', 'Client 10', 'Tax-Free Savings Account', 47860, 'Normal Client', '2018-12-24');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clienttable`
--
ALTER TABLE `clienttable`
  ADD PRIMARY KEY (`DNI`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
