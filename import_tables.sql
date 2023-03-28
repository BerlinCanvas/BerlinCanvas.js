-- phpMyAdmin SQL Dump
-- version 4.9.10
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Erstellungszeit: 19. Mrz 2023 um 14:50
-- Server-Version: 5.5.62-log
-- PHP-Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8_unicode_ci */;

--
-- Datenbank: `name_of_database`
--
CREATE DATABASE IF NOT EXISTS `name_of_database` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `name_of_database`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `bestellungen`
--

CREATE TABLE `bestellungen` (
  `k_nummer` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `b_nummer` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `bestelldatum` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `woche` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `produkt` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `bestellungen`
--

INSERT INTO `bestellungen` (`k_nummer`, `b_nummer`, `bestelldatum`, `woche`, `produkt`) VALUES
('k001', 'b001', '2022-01-04 07:16', '2022 KW 01', '2mmar'),
('k002', 'b002', '2022-01-09 16:25', '2022 KW 01', '1jsta'),
('k003', 'b003', '2022-01-10 22:49', '2022 KW 01', '2mmar'),
('k004', 'b004', '2022-01-14 09:52', '2022 KW 02', '3msta'),
('k005', 'b005', '2022-01-17 20:03', '2022 KW 02', '1jsta'),
('k006', 'b006', '2022-01-19 12:22', '2022 KW 03', '1jstu'),
('k007', 'b007', '2022-01-22 17:06', '2022 KW 03', '1jsta'),
('k008', 'b008', '2022-01-24 06:38', '2022 KW 03', '3msta'),
('k009', 'b009', '2022-01-29 23:20', '2022 KW 04', '2mmar'),
('k010', 'b010', '2022-02-03 08:51', '2022 KW 05', '1jsta'),
('k011', 'b011', '2022-02-08 01:23', '2022 KW 06', '6mvip'),
('k012', 'b012', '2022-02-10 16:59', '2022 KW 06', '2mmar'),
('k013', 'b013', '2022-02-11 21:32', '2022 KW 06', '2mmar'),
('k014', 'b014', '2022-02-16 19:08', '2022 KW 07', '1jsta'),
('k015', 'b015', '2022-02-17 15:34', '2022 KW 07', '3msta'),
('k016', 'b016', '2022-02-24 05:15', '2022 KW 08', '2mmar'),
('k017', 'b017', '2022-02-27 07:04', '2022 KW 08', '3msta'),
('k018', 'b018', '2022-02-29 12:56', '2022 KW 09', '1jsta'),
('k019', 'b019', '2022-03-03 18:30', '2022 KW 09', '1jsta'),
('k020', 'b020', '2022-03-05 04:05', '2022 KW 09', '3msta'),
('k021', 'b021', '2022-03-11 13:33', '2022 KW 10', '3msta'),
('k022', 'b022', '2022-03-14 22:41', '2022 KW 11', '1jstu'),
('k023', 'b023', '2022-03-19 08:12', '2022 KW 11', '2mmar'),
('k024', 'b024', '2022-03-22 16:26', '2022 KW 12', '1jsta'),
('k025', 'b025', '2022-03-25 10:40', '2022 KW 12', '3msta'),
('k026', 'b026', '2022-03-30 15:43', '2022 KW 13', '2mmar'),
('k027', 'b027', '2022-03-31 08:01', '2022 KW 13', '3msta'),
('k028', 'b028', '2022-04-05 07:11', '2022 KW 14', '3msta'),
('k029', 'b029', '2022-04-09 20:57', '2022 KW 14', '1jsta'),
('k030', 'b030', '2022-04-10 11:54', '2022 KW 14', '2mmar'),
('k031', 'b031', '2022-04-14 09:14', '2022 KW 15', '1jsta'),
('k032', 'b032', '2022-04-19 12:06', '2022 KW 16', '6mvip'),
('k033', 'b033', '2022-04-19 23:51', '2022 KW 16', '1jsta'),
('k034', 'b034', '2022-04-24 22:48', '2022 KW 16', '1jstu'),
('k035', 'b035', '2022-04-26 05:19', '2022 KW 17', '3msta'),
('k036', 'b036', '2022-05-01 13:27', '2022 KW 17', '2mmar'),
('k037', 'b037', '2022-05-02 07:02', '2022 KW 18', '1jsta'),
('k038', 'b038', '2022-05-04 15:35', '2022 KW 18', '1jsta'),
('k039', 'b039', '2022-05-10 07:49', '2022 KW 19', '1jsta'),
('k040', 'b040', '2022-05-12 16:01', '2022 KW 19', '3msta'),
('k041', 'b041', '2022-05-16 15:44', '2022 KW 20', '2mmar'),
('k042', 'b042', '2022-05-17 23:40', '2022 KW 20', '1jsta'),
('k043', 'b043', '2022-05-21 12:25', '2022 KW 20', '3msta'),
('k044', 'b044', '2022-05-23 11:31', '2022 KW 21', '1jsta'),
('k045', 'b045', '2022-06-02 05:15', '2022 KW 22', '2mmar'),
('k046', 'b046', '2022-06-12 16:39', '2022 KW 23', '1jstu'),
('k047', 'b047', '2022-06-16 10:44', '2022 KW 24', '1jsta'),
('k048', 'b048', '2022-06-16 17:20', '2022 KW 24', '2mmar'),
('k049', 'b049', '2022-06-22 14:07', '2022 KW 25', '1jstu'),
('k050', 'b050', '2022-06-30 20:04', '2022 KW 26', '1jsta'),
('k051', 'b051', '2022-07-08 15:22', '2022 KW 27', '2mmar'),
('k052', 'b052', '2022-07-12 15:46', '2022 KW 28', '1jsta'),
('k053', 'b053', '2022-07-18 10:17', '2022 KW 29', '1jsta'),
('k054', 'b054', '2022-07-26 19:38', '2022 KW 30', '3msta'),
('k055', 'b055', '2022-08-01 00:43', '2022 KW 31', '1jsta'),
('k056', 'b056', '2022-08-03 18:07', '2022 KW 31', '1jsta'),
('k057', 'b057', '2022-08-03 23:40', '2022 KW 31', '1jsta'),
('k058', 'b058', '2022-08-05 22:15', '2022 KW 31', '1jsta'),
('k059', 'b059', '2022-08-09 05:23', '2022 KW 32', '6mvip'),
('k060', 'b060', '2022-08-10 14:57', '2022 KW 32', '3msta'),
('k061', 'b061', '2022-08-14 07:14', '2022 KW 32', '2mmar'),
('k062', 'b062', '2022-08-16 15:08', '2022 KW 33', '1jsta'),
('k063', 'b063', '2022-08-26 17:02', '2022 KW 34', '2mmar'),
('k064', 'b064', '2022-08-31 21:15', '2022 KW 35', '1jsta'),
('k065', 'b065', '2022-09-11 16:25', '2022 KW 36', '1jsta'),
('k066', 'b066', '2022-09-14 08:04', '2022 KW 37', '3msta'),
('k067', 'b067', '2022-09-21 14:39', '2022 KW 38', '3msta'),
('k068', 'b068', '2022-09-24 15:31', '2022 KW 38', '1jsta'),
('k069', 'b069', '2022-09-26 06:26', '2022 KW 39', '1jsta'),
('k070', 'b070', '2022-10-05 20:20', '2022 KW 40', '3msta'),
('k071', 'b071', '2022-10-07 19:54', '2022 KW 40', '1jsta'),
('k072', 'b072', '2022-10-12 09:52', '2022 KW 41', '1jsta'),
('k073', 'b073', '2022-10-17 10:16', '2022 KW 42', '1jstu'),
('k074', 'b074', '2022-10-27 21:49', '2022 KW 43', '1jsta'),
('k075', 'b075', '2022-10-29 12:42', '2022 KW 43', '2mmar'),
('k076', 'b076', '2022-10-31 05:05', '2022 KW 44', '1jsta'),
('k077', 'b077', '2022-11-01 13:27', '2022 KW 44', '1jstu'),
('k078', 'b078', '2022-11-04 22:23', '2022 KW 44', '3msta'),
('k079', 'b079', '2022-11-06 16:55', '2022 KW 44', '1jsta'),
('k080', 'b080', '2022-11-08 15:08', '2022 KW 45', '2mmar'),
('k081', 'b081', '2022-11-13 08:24', '2022 KW 45', '1jsta'),
('k082', 'b082', '2022-11-15 09:33', '2022 KW 46', '6mvip'),
('k083', 'b083', '2022-11-22 11:58', '2022 KW 47', '3msta'),
('k084', 'b084', '2022-11-24 20:21', '2022 KW 47', '3msta'),
('k085', 'b085', '2022-11-29 07:19', '2022 KW 48', '1jstu'),
('k086', 'b086', '2022-12-07 14:00', '2022 KW 49', '3msta'),
('k087', 'b087', '2022-12-12 22:11', '2022 KW 50', '3msta'),
('k088', 'b088', '2022-12-17 17:23', '2022 KW 50', '1jstu'),
('k089', 'b089', '2022-12-20 14:57', '2022 KW 51', '2mmar'),
('k090', 'b090', '2022-12-29 08:41', '2022 KW 52', '6mvip'),
('k091', 'b091', '2023-01-02 10:10', '2023 KW 01', '1jsta'),
('k092', 'b092', '2023-01-04 06:22', '2023 KW 01', '1jsta'),
('k093', 'b093', '2023-01-04 19:34', '2023 KW 01', '3msta'),
('k094', 'b094', '2023-01-11 20:36', '2023 KW 02', '1jsta'),
('k095', 'b095', '2023-01-17 18:22', '2023 KW 03', '6mvip'),
('k096', 'b096', '2023-01-25 22:53', '2023 KW 04', '1jsta'),
('k097', 'b097', '2023-01-26 14:02', '2023 KW 04', '1jsta'),
('k098', 'b098', '2023-01-31 16:15', '2023 KW 05', '1jstu'),
('k099', 'b099', '2023-02-04 23:37', '2023 KW 05', '3msta'),
('k100', 'b100', '2023-02-05 11:09', '2023 KW 05', '3msta'),
('k101', 'b101', '2023-02-06 07:50', '2023 KW 06', '2mmar'),
('k102', 'b102', '2023-02-10 14:55', '2023 KW 06', '2mmar'),
('k103', 'b103', '2023-02-14 20:34', '2023 KW 07', '3msta'),
('k104', 'b104', '2023-02-16 22:06', '2023 KW 07', '3msta'),
('k105', 'b105', '2023-02-19 07:11', '2023 KW 07', '1jsta'),
('k106', 'b106', '2023-02-19 09:29', '2023 KW 07', '2mmar'),
('k107', 'b107', '2023-02-22 17:01', '2023 KW 08', '1jsta'),
('k108', 'b108', '2023-02-23 21:22', '2023 KW 08', '1jstu'),
('k109', 'b109', '2023-02-28 15:52', '2023 KW 09', '2mmar'),
('k110', 'b110', '2023-03-06 14:59', '2023 KW 10', '1jsta'),
('k111', 'b111', '2023-03-07 20:28', '2023 KW 10', '1jsta'),
('k112', 'b112', '2023-03-11 19:51', '2023 KW 10', '1jsta'),
('k113', 'b113', '2023-03-14 06:13', '2023 KW 11', '2mmar'),
('k114', 'b114', '2023-03-16 17:48', '2023 KW 11', '2mmar'),
('k115', 'b115', '2023-03-17 10:23', '2023 KW 11', '1jstu'),
('k116', 'b116', '2023-03-19 23:15', '2023 KW 11', '2mmar'),
('k117', 'b117', '2023-03-20 17:11', '2023 KW 12', '6mvip'),
('k118', 'b118', '2023-03-29 08:37', '2023 KW 13', '1jsta'),
('k119', 'b119', '2023-04-01 13:45', '2023 KW 13', '1jsta'),
('k120', 'b120', '2023-04-04 09:20', '2023 KW 14', '3msta'),
('k121', 'b121', '2023-04-05 14:09', '2023 KW 14', '2mmar'),
('k122', 'b122', '2023-04-08 15:34', '2023 KW 14', '3msta'),
('k123', 'b123', '2023-04-10 20:01', '2023 KW 15', '1jsta'),
('k124', 'b124', '2023-04-16 19:26', '2023 KW 15', '1jsta'),
('k125', 'b125', '2023-04-20 12:05', '2023 KW 16', '3msta'),
('k126', 'b126', '2023-04-25 08:54', '2023 KW 17', '6mvip'),
('k127', 'b127', '2023-04-29 14:56', '2023 KW 17', '1jsta'),
('k128', 'b128', '2023-05-01 16:10', '2023 KW 18', '2mmar'),
('k129', 'b129', '2023-05-01 19:29', '2023 KW 18', '1jsta'),
('k130', 'b130', '2023-05-09 22:17', '2023 KW 19', '1jsta'),
('k131', 'b131', '2023-05-11 14:02', '2023 KW 19', '3msta'),
('k132', 'b132', '2023-05-11 21:12', '2023 KW 19', '1jsta'),
('k133', 'b133', '2023-05-12 08:44', '2023 KW 19', '3msta'),
('k134', 'b134', '2023-05-14 19:05', '2023 KW 19', '1jsta'),
('k135', 'b135', '2023-05-15 12:46', '2023 KW 20', '1jstu'),
('k136', 'b136', '2023-05-16 07:49', '2023 KW 20', '3msta'),
('k137', 'b137', '2023-05-16 17:07', '2023 KW 20', '3msta'),
('k138', 'b138', '2023-05-16 23:26', '2023 KW 20', '1jsta'),
('k139', 'b139', '2023-05-17 05:32', '2023 KW 20', '2mmar'),
('k140', 'b140', '2023-05-17 13:16', '2023 KW 20', '1jstu'),
('k141', 'b141', '2023-05-20 17:49', '2023 KW 20', '3msta'),
('k142', 'b142', '2023-05-22 22:59', '2023 KW 21', '3msta'),
('k143', 'b143', '2023-05-23 08:27', '2023 KW 21', '1jsta'),
('k144', 'b144', '2023-05-25 12:14', '2023 KW 21', '1jsta');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `kunden`
--

CREATE TABLE `kunden` (
  `k_nummer` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `anrede` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `vorname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `nachname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `strasse` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `hausnr` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `plz` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ort` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `p_u_nummer` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `kunden`
--

INSERT INTO `kunden` (`k_nummer`, `anrede`, `vorname`, `nachname`, `strasse`, `hausnr`, `plz`, `ort`, `p_u_nummer`) VALUES
('k001', 'Frau', 'Heidi', 'Obersdorf', 'Schreiberring', '27', '12101', 'Berlin', 'Privatkunde'),
('k002', 'Herr', 'Gabriel', 'Reisig', 'Lehener Str.', '162', '79106', 'Freiburg', 'Privatkunde'),
('k003', 'Herr', 'Etienne', 'Sancoins', 'Blumenbachstr.', '11', '37075', 'Göttingen', 'Privatkunde'),
('k004', 'Frau', 'Amanda', 'Barrel', 'Weilbrunnstr.', '12', '60435', 'Frankfurt am Main', 'u03'),
('k005', 'Frau', 'Paulina', 'Schatzgarten', 'Stadtwaldgürtel', '54', '50931', 'Köln', 'Privatkunde'),
('k006', 'Herr', 'Maurice', 'Rouen', 'Rietschelstr.', '47', '04177', 'Leipzig', 'Privatkunde'),
('k007', 'Frau', 'Nadine', 'Langen', 'Rotenbühlerweg', '14', '66123', 'Saarbrücken', 'u06'),
('k008', 'Frau', 'Pia', 'Hochgrat', 'Efeuweg', '62', '22299', 'Hamburg', 'Privatkunde'),
('k009', 'Herr', 'Roland', 'Gronfelder', 'Höfestr.', '22', '30163', 'Hannover', 'Privatkunde'),
('k010', 'Frau', 'Yasmine', 'Hölziger', 'Aureliusstr.', '29', '52064', 'Aachen', 'u01'),
('k011', 'Frau', 'Dana', 'Bernstein', 'Vorgebirgstr.', '151', '50969', 'Köln', 'Privatkunde'),
('k012', 'Herr', 'Bernhard', 'Vailenmer', 'Goebenstr.', '12', '20253', 'Hamburg', 'Privatkunde'),
('k013', 'Frau', 'Chantalle', 'Vinic', 'Augustinerstr.', '31', '66119', 'Saarbrücken', 'u06'),
('k014', 'Frau', 'Ronja', 'Oberroth', 'Röhrhofsgasse', '6', '01067', 'Dresden', 'Privatkunde'),
('k015', 'Herr', 'Julian', 'Baischier', 'Wöhlerstr.', '20', '60323', 'Frankfurt am Main', 'u03'),
('k016', 'Herr', 'Rafael', 'Verny', 'Wendlohstr.', '20D', '22459', 'Hamburg', 'u04'),
('k017', 'Frau', 'Katharina', 'Tarway', 'Schöneckstr.', '5C', '79104', 'Freiburg', 'Privatkunde'),
('k018', 'Herr', 'Tim', 'Rosenbach', 'Belforter Str.', '7', '10405', 'Berlin', 'Privatkunde'),
('k019', 'Frau', 'Emma', 'Lorraine', 'Lötzener Str.', '16', '60487', 'Frankfurt am Main', 'u03'),
('k020', 'Frau', 'Anne', 'Wiesenblum', 'Ganghoferstr.', '134', '81373', 'München', 'Privatkunde'),
('k021', 'Frau', 'Antje', 'Leveld', 'Zeppelinstr.', '33', '52068', 'Aachen', 'u01'),
('k022', 'Herr', 'Hugo', 'Aureon', 'Eiffestr.', '235D', '20537', 'Hamburg', 'Privatkunde'),
('k023', 'Herr', 'Marcel', 'Dijon', 'Fürstenallee', '48', '33102', 'Paderborn', 'u02'),
('k024', 'Frau', 'Madeleine', 'Savin', 'Peiffersweg', '11', '22307', 'Hamburg', 'Privatkunde'),
('k025', 'Herr', 'Martin', 'Weingarten', 'Böckingstr.', '34', '51063', 'Köln', 'Privatkunde'),
('k026', 'Frau', 'Alicia', 'Biba', 'Rudolf-Hahn-Str.', '44', '53225', 'Bonn', 'Privatkunde'),
('k027', 'Herr', 'Scott', 'Parker', 'Grazer Platz', '12', '12157', 'Berlin', 'Privatkunde'),
('k028', 'Frau', 'Jennifer', 'Bieberburg', 'Obere Eichstädtstr.', '31', '04299', 'Leipzig', 'u05'),
('k029', 'Herr', 'Lawrence', 'Knighton', 'Buntentorsteinweg', '151A', '28201', 'Bremen', 'Privatkunde'),
('k030', 'Frau', 'Vanessa', 'Brückner', 'Germerring', '12', '22763', 'Hamburg', 'Privatkunde'),
('k031', 'Frau', 'Emanuelle', 'Montpellier', 'Heinestr.', '11', '66121', 'Saarbrücken', 'u06'),
('k032', 'Herr', 'Kim', 'Patrick', 'Brachetweg', '3', '22179', 'Hamburg', 'Privatkunde'),
('k033', 'Frau', 'Violetta', 'Rosentorf', 'Linzer Str.', '33', '18069', 'Rostock', 'Privatkunde'),
('k034', 'Herr', 'Luis', 'Bühler', 'Am Koeltzepark', '7', '13585', 'Berlin', 'Privatkunde'),
('k035', 'Herr', 'Anton', 'Rosenbrunn', 'Enzianweg', '19', '33100', 'Paderborn', 'u02'),
('k036', 'Frau', 'Melissa', 'Nebel', 'Flanaganstr.', '22B', '14195', 'Berlin', 'Privatkunde'),
('k037', 'Herr', 'Benoit', 'Rokal', 'Oberrieder Str.', '35', '79117', 'Freiburg', 'Privatkunde'),
('k038', 'Frau', 'Simone', 'Krikton', 'Heinskamp', '20', '22081', 'Hamburg', 'u04'),
('k039', 'Frau', 'Sheila', 'Sinticon', 'Brachstr.', '1c', '60431', 'Frankfurt am Main', 'u03'),
('k040', 'Herr', 'Toni', 'Chenzia', 'Menzestr.', '8a', '22763', 'Hamburg', 'u04'),
('k041', 'Frau', 'Mariam', 'Schenker', 'Neue Hochstr.', '54A', '13347', 'Berlin', 'Privatkunde'),
('k042', 'Herr', 'Brian', 'Staigerwald', 'Lucas-Cranach-Str.', '26', '04316', 'Leipzig', 'u05'),
('k043', 'Frau', 'Johanna', 'Mamsell', 'Leo-Tolstoi-Str.', '1', '50827', 'Köln', 'Privatkunde'),
('k044', 'Frau', 'Aimee', 'Wemper', 'Bachemerstr.', '252', '66740', 'Saarlouis', 'Privatkunde'),
('k045', 'Herr', 'Peter', 'Rübetal', 'Vinetastr.', '11', '13189', 'Berlin', 'Privatkunde'),
('k046', 'Frau', 'Claudia', 'Berg-Lüttke', 'Gartenstr.', '4', '12355', 'Berlin', 'Privatkunde'),
('k047', 'Herr', 'Heinz', 'Washber', 'Moltkestr.', '197', '52068', 'Aachen', 'u01'),
('k048', 'Herr', 'Andreas', 'Schnellbacher', 'Lincolnstr.', '27D', '10315', 'Berlin', 'Privatkunde'),
('k049', 'Herr', 'Gerard', 'Beauregard', 'Flensburger Str.', '150', '66130', 'Saarbrücken', 'Privatkunde'),
('k050', 'Herr', 'Aurélien', 'Lièvre', 'Kornblumenring', '77A', '12357', 'Berlin', 'Privatkunde'),
('k051', 'Frau', 'Isabelle', 'Fischer', 'Hennebergstr.', '17', '37077', 'Göttingen', 'Privatkunde'),
('k052', 'Frau', 'Anna-Lisa', 'Singenbach', 'Buer-Gladbecker-Str.', '45', '45127', 'Essen', 'Privatkunde'),
('k053', 'Frau', 'Shelby', 'Lankers', 'Carl-Orff-Bogen', '201', '65934', 'Frankfurt am Main', 'u03'),
('k054', 'Frau', 'Anna', 'Büttingen', 'Willem-Barents-Weg', '14d', '13053', 'Berlin', 'Privatkunde'),
('k055', 'Herr', 'Klaus', 'Werduin', 'Birkenallee', '6', '52076', 'Aachen', 'u01'),
('k056', 'Herr', 'Bertrand', 'Bordure', 'Földerichstr.', '14', '13595', 'Berlin', 'Privatkunde'),
('k057', 'Herr', 'Stephen', 'Kastania', 'Elfbuchenstr.', '11', '04129', 'Leipzig', 'u05'),
('k058', 'Frau', 'Annalise', 'Gänsler', 'Kalkumer Str.', '38', '13158', 'Berlin', 'Privatkunde'),
('k059', 'Frau', 'Jeanne', 'Rivage', 'Buchenweg', '2', '66111', 'Saarbrücken', 'Privatkunde'),
('k060', 'Herr', 'Lawrence', 'Waterlily', 'Am Schloßpark', '10', '13187', 'Berlin', 'Privatkunde'),
('k061', 'Frau', 'Laura', 'Haase', 'Hirschberger Str.', '20', '10785', 'Berlin', 'Privatkunde'),
('k062', 'Herr', 'Jonathan', 'Pflückner', 'Warburgerstr. 12', '39', '81677', 'München', 'Privatkunde'),
('k063', 'Frau', 'Katja', 'Lilienthal', 'Malzweg', '68a', '51103', 'Köln', 'Privatkunde'),
('k064', 'Frau', 'Kimberly', 'Hainingen', 'Lutherstr.', '12', '60385', 'Frankfurt am Main', 'u03'),
('k065', 'Herr', 'Antoine', 'Vivitera', 'Durlacher Str.', '73', '22309', 'Hamburg', 'u04'),
('k066', 'Herr', 'Ian', 'Soran', 'Johannistor', '120', '33106', 'Paderborn', 'u02'),
('k067', 'Herr', 'Maximilian', 'Brück', 'Mozartstr.', '48a', '03048', 'Cottbus', 'Privatkunde'),
('k068', 'Herr', 'Adrian', 'Mönch', 'Haldenstr.', '1e', '79115', 'Freiburg', 'Privatkunde'),
('k069', 'Frau', 'Teri', 'Ming', 'Mövenstr.', '1', '22301', 'Hamburg', 'Privatkunde'),
('k070', 'Herr', 'Richard', 'Sommer', 'Adlerstr.', '15', '79104', 'Freiburg', 'Privatkunde'),
('k071', 'Frau', 'Elisabeth', 'Hofhaus', 'Gräfenhäuser Str.', '11', '34123', 'Kassel', 'Privatkunde'),
('k072', 'Herr', 'Lukas', 'Grün', 'Ahornweg', '2a', '14129', 'Berlin', 'Privatkunde'),
('k073', 'Frau', 'Melissa', 'Finkenwald', 'Im Grün', '17', '30453', 'Hannover', 'Privatkunde'),
('k074', 'Herr', 'Matthew', 'Patterson', 'Am Volkspark', '61', '10715', 'Berlin', 'Privatkunde'),
('k075', 'Herr', 'Bernd', 'Aiberich', 'Fröhlichstr.', '50b', '45147', 'Essen', 'Privatkunde'),
('k076', 'Frau', 'Sophie', 'Küstner', 'Burgstr.', '28', '20535', 'Hamburg', 'Privatkunde'),
('k077', 'Herr', 'Oskar', 'Greenbaum', 'Rehstr.', '29', '65933', 'Frankfurt am Main', 'Privatkunde'),
('k078', 'Herr', 'William', 'Sullivan', 'Rotenhäuser Str.', '62', '21109', 'Hamburg', 'Privatkunde'),
('k079', 'Herr', 'Ben', 'Daisendorff', 'Rohrweihstr.', '32', '52064', 'Aachen', 'u01'),
('k080', 'Frau', 'Christina', 'Breitenburg', 'Ostseestr.', '14', '81739', 'München', 'Privatkunde'),
('k081', 'Frau', 'Bridget', 'Fenner', 'Palisadenstr.', '37', '60594', 'Frankfurt am Main', 'u03'),
('k082', 'Herr', 'Nathan', 'Bilian', 'Nauheimer Str.', '4', '50969', 'Köln', 'Privatkunde'),
('k083', 'Herr', 'David', 'Völker', 'Kollerbergring', '64', '10435', 'Berlin', 'Privatkunde'),
('k084', 'Herr', 'Tobias', 'Mäkuira', 'Blumenstr.', '1', '10585', 'Berlin', 'Privatkunde'),
('k085', 'Frau', 'Victoria', 'Gordan', 'Hochthronweg.', '1', '12349', 'Berlin', 'Privatkunde'),
('k086', 'Herr', 'John', 'Holtz', 'Oberfeldring', '26', '37083', 'Göttingen', 'Privatkunde'),
('k087', 'Frau', 'Helen', 'Flowers', 'Pasteurstr.', '49', '10407', 'Berlin', 'Privatkunde'),
('k088', 'Frau', 'Dianne', 'Hammersley', 'Gazellenkamp', '86', '22529', 'Hamburg', 'Privatkunde'),
('k089', 'Frau', 'Veronika', 'Herbst', 'Helsinkier Str.', '44', '53117', 'Bonn', 'Privatkunde'),
('k090', 'Frau', 'Rachelle', 'Violett', 'Am Krug', '8', '51149', 'Köln', 'Privatkunde'),
('k091', 'Herr', 'Gary', 'Young', 'Schwanenberg', '79', '65936', 'Frankfurt am Main', 'u03'),
('k092', 'Frau', 'Phillipa', 'Barilia', 'In der Röth', '8', '66115', 'Saarbrücken', 'u06'),
('k093', 'Herr', 'Jean-Luc', 'Piqua', 'Am Fleesensee', '41', '66123', 'Saarbrücken', 'u06'),
('k094', 'Frau', 'Monika', 'Gentler', 'Zum Forsthaus', '23', '28205', 'Bremen', 'Privatkunde'),
('k095', 'Herr', 'Joey', 'Trioban', 'Hainholzweg', '1', '37085', 'Göttingen', 'Privatkunde'),
('k096', 'Herr', 'Joachim', 'Gork', 'Usedomer Str.', '133', '52078', 'Aachen', 'u01'),
('k097', 'Herr', 'Ross', 'Seller', 'Loreleistr.', '40', '65929', 'Frankfurt am Main', 'Privatkunde'),
('k098', 'Frau', 'Phoebe', 'Duffay', 'Gartenweg', '3', '20144', 'Hamburg', 'Privatkunde'),
('k099', 'Herr', 'Chandler', 'Bong', 'Wohlers Allee', '30', '22767', 'Hamburg', 'Privatkunde'),
('k100', 'Herr', 'Angus', 'Myver', 'Am Hoppenhof', '4', '33098', 'Paderborn', 'u02'),
('k101', 'Frau', 'Valerie', 'Blousson', 'Himbeersteig', '44', '14129', 'Berlin', 'Privatkunde'),
('k102', 'Frau', 'Nora', 'Pollinger', 'Waldparkstr.', '16', '28277', 'Bremen', 'Privatkunde'),
('k103', 'Herr', 'Joshua', 'Bloom', 'Windhuker Str.', '54c', '13351', 'Berlin', 'Privatkunde'),
('k104', 'Herr', 'Warren', 'Buffaye', 'Leiteweg', '33', '65931', 'Frankfurt am Main', 'u03'),
('k105', 'Herr', 'Pete', 'Thoranton', 'Am Bahndamm', '128', '33102', 'Paderborn', 'u02'),
('k106', 'Frau', 'Audrey', 'Ammeran', 'Am Kuckum', '12', '33161', 'Paderborn', 'u02'),
('k107', 'Frau', 'Maria', 'Winter', 'Weidegrund', '140h', '01219', 'Dresden', 'Privatkunde'),
('k108', 'Herr', 'Roman', 'Herzlich', 'Krondorfer Str.', '23', '10437', 'Berlin', 'Privatkunde'),
('k109', 'Herr', 'Paul', 'Gatow', 'Reitensteiner Weg', '38', '01067', 'Dresden', 'Privatkunde'),
('k110', 'Frau', 'Annette', 'Blüm', 'Lilienstr.', '209a', '53175', 'Bonn', 'Privatkunde'),
('k111', 'Herr', 'Christian', 'Weiß', 'Schwandorfer Str.', '34', '52072', 'Aachen', 'u01'),
('k112', 'Frau', 'Julia', 'Waller-Brink', 'Silbermannstr.', '5', '04229', 'Leipzig', 'Privatkunde'),
('k113', 'Herr', 'Harry', 'Winzer', 'Auf Münsterhöh', '5', '12101', 'Berlin', 'Privatkunde'),
('k114', 'Herr', 'Gustavo', 'Brisinia', 'An der Weide', '16', '52080', 'Aachen', 'u01'),
('k115', 'Herr', 'Vladimir', 'Puter', 'Waldgasse', '129', '18109', 'Rostock', 'Privatkunde'),
('k116', 'Frau', 'Michelle', 'Obrema', 'Viktoriastr.', '4', '37081', 'Göttingen', 'Privatkunde'),
('k117', 'Herr', 'Frank', 'Oztinger', 'Offenbachstr.', '10', '50670', 'Köln', 'Privatkunde'),
('k118', 'Frau', 'Sofia', 'Ramsam', 'Forbacher Str.', '34', '66117', 'Saarbrücken', 'u06'),
('k119', 'Herr', 'Felix', 'Tulpenweida', 'Lafontainestr.', '41', '10585', 'Berlin', 'Privatkunde'),
('k120', 'Frau', 'Li', 'Soong', 'Aupitzer Weg', '5', '40239', 'Düsseldorf', 'Privatkunde'),
('k121', 'Frau', 'Barbara', 'Saizen', 'Edinburger Str.', '57', '13349', 'Berlin', 'Privatkunde'),
('k122', 'Herr', 'Fabio', 'Kenzoni', 'Erbsengasse', '19', '60439', 'Frankfurt am Main', 'u03'),
('k123', 'Herr', 'Patrick', 'Steubart', 'Rathausstr.', '3', '52062', 'Aachen', 'u01'),
('k124', 'Herr', 'Gabriel', 'Faddon', 'Magdeburger Allee', '22', '60435', 'Frankfurt am Main', 'u03'),
('k125', 'Herr', 'Wilbert', 'Rika', 'Ziegenhainer Str.', '6', '33100', 'Paderborn', 'u02'),
('k126', 'Herr', 'Jonas', 'Fracke', 'Burgstr.', '17', '50733', 'Köln', 'Privatkunde'),
('k127', 'Frau', 'Marina', 'Sartissio', 'Frühlingstr.', '6', '20097', 'Hamburg', 'u04'),
('k128', 'Frau', 'Annika', 'Behrlausch', 'Raiffeisen', '14', '12279', 'Berlin', 'Privatkunde'),
('k129', 'Frau', 'Alexandra', 'Bates', 'Linsengasse', '40', '45141', 'Essen', 'Privatkunde'),
('k130', 'Herr', 'Konrad', 'Noonian', 'Ritterstr.', '43', '22089', 'Hamburg', 'Privatkunde'),
('k131', 'Frau', 'Pauline', 'Robinson', 'Springenstr.', '65', '40547', 'Düsseldorf', 'Privatkunde'),
('k132', 'Herr', 'Kevin', 'Pratros', 'Postgasse', '3c', '04229', 'Leipzig', 'u05'),
('k133', 'Herr', 'Terence', 'Berger', 'Landhausring', '11', '12683', 'Berlin', 'Privatkunde'),
('k134', 'Herr', 'George', 'Morris', 'Lehárstr.', '5', '60438', 'Frankfurt am Main', 'u03'),
('k135', 'Frau', 'Sonya', 'Frühling', 'Heinrich-Hertz-Str.', '277', '45326', 'Essen', 'Privatkunde'),
('k136', 'Herr', 'Julius', 'Knod', 'Wildschwanbrook', '55', '30659', 'Hannover', 'Privatkunde'),
('k137', 'Frau', 'Karolina', 'Rauschenbach', 'Calvinstr.', '19', '10557', 'Berlin', 'Privatkunde'),
('k138', 'Frau', 'Rebecca', 'Santos', 'Heidblick', '19', '22529', 'Hamburg', 'u04'),
('k139', 'Herr', 'Arthur', 'Rutherford', 'Meridianstr.', '6', '20535', 'Hamburg', 'Privatkunde'),
('k140', 'Frau', 'Hanni', 'Hübscher', 'Lornsenstr.', '7', '22767', 'Hamburg', 'Privatkunde'),
('k141', 'Frau', 'Rosalie', 'Letourrier', 'Binzstr.', '7', '66125', 'Saarbrücken', 'u06'),
('k142', 'Frau', 'Susanne', 'Schneider', 'Ruhetaler Weg', '171', '37079', 'Göttingen', 'Privatkunde'),
('k143', 'Herr', 'Marc', 'Strangee', 'Rolandstr.', '112', '13156', 'Berlin', 'Privatkunde'),
('k144', 'Frau', 'Tatiana', 'Falkenstein', 'Sophienstr.', '32', '80638', 'München', 'Privatkunde');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `newsletter`
--

CREATE TABLE `newsletter` (
  `versanddatum` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `woche` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `empfaenger` int(11) NOT NULL,
  `oeffner` int(11) NOT NULL,
  `downloader` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `newsletter`
--

INSERT INTO `newsletter` (`versanddatum`, `woche`, `empfaenger`, `oeffner`, `downloader`) VALUES
('2022-05-02 16:32', '2022 KW 18', 71407, 25452, 4928),
('2022-05-09 17:06', '2022 KW 19', 71298, 26032, 5160),
('2022-05-16 15:43', '2022 KW 20', 71163, 26966, 4590),
('2022-05-23 16:36', '2022 KW 21', 71041, 25036, 5520),
('2022-05-30 15:05', '2022 KW 22', 71026, 25344, 6495),
('2022-06-06 16:32', '2022 KW 23', 70929, 25578, 5415),
('2022-06-13 15:18', '2022 KW 24', 70705, 26820, 8288),
('2022-06-20 14:48', '2022 KW 25', 70513, 28134, 10658),
('2022-06-27 15:05', '2022 KW 26', 70421, 27860, 6683),
('2022-07-04 16:26', '2022 KW 27', 70264, 28682, 8903),
('2022-07-11 16:37', '2022 KW 28', 70184, 27120, 6053),
('2022-07-18 15:15', '2022 KW 29', 70319, 25084, 6045),
('2022-07-25 14:57', '2022 KW 30', 70087, 25914, 4973),
('2022-08-01 15:30', '2022 KW 31', 70027, 24988, 7613),
('2022-08-08 16:27', '2022 KW 32', 70013, 24528, 5325),
('2022-08-15 17:09', '2022 KW 33', 69933, 22992, 6660),
('2022-08-22 16:10', '2022 KW 34', 69861, 24824, 4868),
('2022-08-29 15:10', '2022 KW 35', 70048, 24722, 3908),
('2022-09-05 16:30', '2022 KW 36', 70047, 26178, 4253),
('2022-09-12 15:40', '2022 KW 37', 70071, 26424, 4035),
('2022-09-19 17:26', '2022 KW 38', 70059, 25296, 4463),
('2022-09-26 16:54', '2022 KW 39', 69938, 25128, 2760),
('2022-10-03 16:27', '2022 KW 40', 69894, 27836, 6885),
('2022-10-10 16:14', '2022 KW 41', 69850, 26770, 4673),
('2022-10-17 17:32', '2022 KW 42', 69807, 23772, 4433),
('2022-10-24 17:40', '2022 KW 43', 69779, 26474, 4343),
('2022-10-31 16:07', '2022 KW 44', 69722, 25412, 2925),
('2022-11-07 18:06', '2022 KW 45', 69679, 25548, 3713),
('2022-11-14 16:28', '2022 KW 46', 63983, 20864, 3000),
('2022-11-21 16:18', '2022 KW 47', 69904, 25428, 3375),
('2022-11-28 17:57', '2022 KW 48', 63927, 20548, 2438),
('2022-12-05 16:42', '2022 KW 49', 63888, 20822, 2588),
('2022-12-12 17:09', '2022 KW 50', 63898, 20496, 2715),
('2022-12-19 15:01', '2022 KW 51', 63854, 20234, 2175),
('2022-12-26 16:23', '2022 KW 52', 63515, 19762, 3930),
('2023-01-02 15:12', '2023 KW 01', 65264, 21762, 3075),
('2023-01-09 17:36', '2023 KW 02', 66741, 22888, 4545),
('2023-01-16 16:24', '2023 KW 03', 66706, 22724, 3113),
('2023-01-23 18:28', '2023 KW 04', 64465, 22406, 2970),
('2023-01-30 15:42', '2023 KW 05', 75624, 29516, 4635),
('2023-02-06 16:51', '2023 KW 06', 75291, 25542, 4005),
('2023-02-13 17:10', '2023 KW 07', 75196, 27882, 5183),
('2023-02-20 14:38', '2023 KW 08', 74771, 24110, 3083),
('2023-02-27 18:24', '2023 KW 09', 71669, 29256, 9081),
('2023-03-06 19:37', '2023 KW 10', 71588, 27662, 6174),
('2023-03-13 15:59', '2023 KW 11', 71725, 25586, 6166),
('2023-03-20 17:12', '2023 KW 12', 72890, 26951, 5172),
('2023-03-27 17:45', '2023 KW 13', 72828, 25988, 7918),
('2023-04-03 16:23', '2023 KW 14', 72814, 25509, 5538),
('2023-04-10 18:40', '2023 KW 15', 74828, 24601, 7126),
('2023-04-17 15:27', '2023 KW 16', 74751, 26562, 5209),
('2023-04-24 14:51', '2023 KW 17', 74951, 26453, 4182),
('2023-05-01 17:16', '2023 KW 18', 73549, 27487, 4466),
('2023-05-08 19:15', '2023 KW 19', 72874, 27481, 4196),
('2023-05-15 14:49', '2023 KW 20', 71460, 25802, 4552),
('2023-05-22 15:32', '2023 KW 21', 71337, 25631, 2815);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `produkte`
--

CREATE TABLE `produkte` (
  `p_nummer` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `p_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `free_trial` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `produkte`
--

INSERT INTO `produkte` (`p_nummer`, `p_name`, `free_trial`) VALUES
('1jsta', '1 Jahr standard', 'false'),
('1jstu', '1 Jahr student', 'false'),
('2mmar', '2 Monate marketing', 'true'),
('3msta', '3 Monate standard', 'false'),
('6mvip', '6 Monate vip', 'true');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `umfrage`
--

CREATE TABLE `umfrage` (
  `empfangsdatum` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `finanzen` int(11) NOT NULL,
  `politik` int(11) NOT NULL,
  `soziales` int(11) NOT NULL,
  `sport` int(11) NOT NULL,
  `technik` int(11) NOT NULL,
  `wirtschaft` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `umfrage`
--

INSERT INTO `umfrage` (`empfangsdatum`, `finanzen`, `politik`, `soziales`, `sport`, `technik`, `wirtschaft`) VALUES
('2022-01-04', 3, 5, 5, 4, 5, 7),
('2022-01-09', 7, 9, 8, 10, 1, 1),
('2022-01-15', 2, 7, 4, 7, 9, 7),
('2022-01-23', 9, 6, 8, 8, 7, 9),
('2022-01-26', 4, 10, 9, 10, 3, 9),
('2022-01-26', 10, 4, 10, 8, 7, 6),
('2022-02-08', 5, 9, 4, 10, 10, 4),
('2022-02-11', 2, 1, 8, 7, 7, 3),
('2022-02-17', 7, 6, 6, 8, 8, 8),
('2022-02-22', 3, 4, 8, 10, 2, 2),
('2022-02-27', 8, 10, 8, 9, 10, 10),
('2022-02-29', 3, 7, 3, 7, 1, 7),
('2022-03-04', 1, 4, 2, 8, 7, 6),
('2022-03-12', 6, 9, 9, 9, 8, 7),
('2022-03-18', 2, 8, 4, 10, 4, 8),
('2022-03-24', 1, 5, 6, 10, 9, 6),
('2022-03-31', 7, 3, 8, 8, 6, 4),
('2022-04-03', 3, 10, 7, 9, 7, 8),
('2022-04-08', 4, 8, 7, 8, 3, 9),
('2022-04-15', 6, 5, 5, 10, 5, 6),
('2022-04-23', 7, 10, 4, 7, 10, 7),
('2022-04-27', 1, 6, 6, 9, 5, 7),
('2022-05-02', 10, 8, 3, 6, 9, 9),
('2022-05-05', 3, 5, 2, 10, 7, 10),
('2022-05-11', 3, 9, 8, 9, 9, 6),
('2022-05-11', 5, 8, 4, 6, 7, 8),
('2022-05-16', 2, 5, 10, 9, 7, 7),
('2022-05-20', 9, 7, 2, 10, 4, 9),
('2022-05-23', 7, 7, 4, 9, 3, 6),
('2022-06-02', 1, 10, 7, 7, 9, 7),
('2022-06-19', 5, 3, 3, 8, 6, 7),
('2022-06-26', 3, 7, 4, 10, 1, 10),
('2022-07-05', 1, 5, 5, 7, 9, 2),
('2022-07-16', 5, 9, 7, 10, 3, 8),
('2022-08-01', 6, 4, 9, 9, 3, 6),
('2022-08-04', 1, 10, 6, 7, 10, 8),
('2022-08-06', 2, 7, 2, 10, 2, 8),
('2022-08-11', 4, 8, 7, 8, 8, 4),
('2022-08-14', 2, 4, 10, 9, 1, 3),
('2022-08-25', 1, 10, 6, 10, 5, 2),
('2022-09-07', 10, 9, 8, 9, 8, 10),
('2022-09-13', 3, 5, 10, 7, 9, 10),
('2022-09-24', 4, 9, 2, 9, 7, 1),
('2022-09-30', 7, 5, 4, 8, 4, 3),
('2022-10-04', 6, 7, 3, 9, 9, 1),
('2022-10-06', 2, 9, 9, 10, 8, 3),
('2022-10-15', 8, 4, 7, 10, 5, 2),
('2022-10-24', 5, 10, 6, 4, 3, 8),
('2022-10-29', 4, 4, 8, 9, 10, 8),
('2022-11-04', 7, 9, 6, 5, 7, 2),
('2022-11-04', 3, 3, 10, 10, 5, 2),
('2022-11-08', 7, 7, 6, 7, 7, 3),
('2022-11-14', 1, 5, 6, 9, 8, 1),
('2022-11-20', 2, 9, 3, 10, 3, 3),
('2022-11-23', 4, 3, 5, 8, 6, 3),
('2022-12-05', 7, 10, 9, 9, 9, 1),
('2022-12-08', 10, 7, 8, 7, 4, 6),
('2022-12-12', 7, 9, 6, 10, 10, 3),
('2022-12-17', 1, 5, 3, 9, 7, 1),
('2022-12-19', 5, 6, 7, 7, 4, 5),
('2022-12-27', 7, 8, 10, 9, 1, 10),
('2023-01-04', 6, 9, 5, 4, 7, 6),
('2023-01-08', 9, 3, 9, 6, 3, 4),
('2023-01-13', 8, 8, 10, 7, 1, 7),
('2023-01-19', 10, 3, 8, 9, 4, 9),
('2023-01-27', 4, 9, 9, 10, 2, 6),
('2023-02-01', 9, 4, 10, 8, 1, 7),
('2023-02-05', 9, 4, 8, 5, 3, 10),
('2023-02-11', 4, 3, 10, 9, 2, 7),
('2023-02-15', 7, 5, 9, 7, 1, 4),
('2023-02-23', 3, 4, 4, 10, 4, 8),
('2023-02-23', 2, 10, 9, 9, 2, 10),
('2023-02-29', 9, 1, 10, 5, 2, 2),
('2023-03-05', 10, 3, 7, 10, 1, 9),
('2023-03-12', 2, 6, 8, 8, 1, 9),
('2023-03-16', 4, 7, 10, 3, 4, 7),
('2023-03-19', 8, 4, 8, 5, 2, 10),
('2023-03-20', 7, 10, 7, 7, 1, 7),
('2023-04-02', 10, 2, 9, 10, 3, 6),
('2023-04-05', 7, 4, 9, 8, 2, 8),
('2023-04-14', 9, 5, 10, 7, 1, 9),
('2023-04-23', 6, 7, 9, 4, 1, 5),
('2023-04-28', 3, 3, 9, 9, 4, 10),
('2023-05-02', 7, 9, 7, 7, 1, 4),
('2023-05-11', 9, 7, 10, 9, 1, 9),
('2023-05-16', 10, 5, 9, 10, 2, 9),
('2023-05-17', 5, 9, 9, 7, 3, 5),
('2023-05-20', 8, 10, 7, 7, 2, 7),
('2023-05-24', 9, 4, 8, 9, 1, 8),
('2023-05-24', 5, 6, 10, 3, 3, 10),
('2023-05-29', 7, 7, 9, 8, 1, 9);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `unternehmen`
--

CREATE TABLE `unternehmen` (
  `u_nummer` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `u_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `strasse` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `hausnr` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `plz` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ort` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `unternehmen`
--

INSERT INTO `unternehmen` (`u_nummer`, `u_name`, `strasse`, `hausnr`, `plz`, `ort`) VALUES
('u01', 'Energie Aachen', 'Antoniusstraße', '3', '52062', 'Aachen'),
('u02', 'Funding Trust', 'Fürstenweg', '17', '33102', 'Paderborn'),
('u03', 'HorizonAirs', 'Opernplatz', '14', '60322', 'Frankfurt am Main'),
('u04', 'Omicron Technica', 'Rathausstraße', '14', '20095', 'Hamburg'),
('u05', 'Greenbaum Acquisitions', 'Grünewaldstraße', '1', '04103', 'Leipzig'),
('u06', 'Vignoble Chocolatiers', 'Hafenstraße', '25', '66111', 'Saarbrücken');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `webtraffic`
--

CREATE TABLE `webtraffic` (
  `zeitraum` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `nutzer` int(11) NOT NULL,
  `sitzungen` int(11) NOT NULL,
  `seitenaufrufe` int(11) NOT NULL,
  `nutzung_desktop` int(11) NOT NULL,
  `nutzung_smartphone` int(11) NOT NULL,
  `nutzung_tablet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `webtraffic`
--

INSERT INTO `webtraffic` (`zeitraum`, `nutzer`, `sitzungen`, `seitenaufrufe`, `nutzung_desktop`, `nutzung_smartphone`, `nutzung_tablet`) VALUES
('2021-01-01', 12307, 19058, 49892, 71, 15, 14),
('2021-02-01', 16031, 25840, 58450, 61, 22, 17),
('2021-03-01', 13548, 23501, 48669, 70, 17, 13),
('2021-04-01', 12644, 21724, 43101, 68, 20, 12),
('2021-05-01', 16183, 26319, 50202, 70, 19, 11),
('2021-06-01', 17511, 27772, 51070, 70, 19, 11),
('2021-07-01', 42072, 57257, 88994, 61, 26, 13),
('2021-08-01', 42492, 55102, 87513, 67, 22, 11),
('2021-09-01', 49188, 61297, 95264, 61, 28, 11),
('2021-10-01', 81238, 106919, 156419, 55, 35, 10),
('2021-11-01', 83778, 101441, 151813, 48, 42, 10),
('2021-12-01', 82036, 98772, 141667, 40, 50, 10),
('2022-01-01', 116546, 155006, 211180, 38, 52, 10),
('2022-02-01', 136665, 166215, 229741, 38, 52, 10),
('2022-03-01', 110030, 134635, 185365, 41, 49, 10),
('2022-04-01', 111508, 137575, 209863, 42, 48, 10),
('2022-05-01', 117756, 141390, 200065, 38, 52, 10),
('2022-06-01', 192821, 229468, 299227, 33, 56, 11),
('2022-07-01', 124642, 152546, 204288, 34, 55, 11),
('2022-08-01', 130337, 157422, 211772, 39, 51, 10),
('2022-09-01', 135859, 163790, 216438, 43, 48, 9),
('2022-10-01', 107783, 131029, 185503, 41, 48, 11),
('2022-11-01', 140517, 166624, 225051, 36, 53, 11),
('2022-12-01', 186207, 223343, 297146, 43, 42, 15),
('2023-01-01', 235983, 281394, 363928, 49, 33, 18),
('2023-02-01', 245015, 289753, 372963, 47, 37, 16),
('2023-03-01', 232510, 277922, 360456, 44, 38, 18),
('2023-04-01', 227874, 271954, 345757, 41, 39, 20),
('2023-05-01', 241543, 286281, 369490, 40, 37, 23);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
