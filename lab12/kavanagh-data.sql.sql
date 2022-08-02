-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 01, 2022 at 04:21 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kavanagh-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `midwest-states`
--

CREATE TABLE `midwest-states` (
  `ID` int(11) NOT NULL,
  `Name` varchar(2) NOT NULL,
  `Population` int(11) NOT NULL,
  `GDP` int(11) NOT NULL,
  `Area` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `midwest-states`
--

INSERT INTO `midwest-states` (`ID`, `Name`, `Population`, `GDP`, `Area`) VALUES
(0, 'NE', 1961504, 150388, 77358),
(1, 'KY', 4467673, 234498, 40408),
(2, 'OK', 3956971, 206750, 69899),
(3, 'WI', 5822434, 365931, 65498),
(4, 'SD', 884659, 61205, 77116),
(5, 'OH', 11689100, 736449, 44825),
(6, 'ND', 762062, 63386, 70761),
(7, 'MN', 10077331, 568413, 96716),
(8, 'MO', 6137428, 359952, 69715),
(9, 'KS', 2913314, 192303, 82278),
(10, 'IA', 3155070, 219841, 58295),
(11, 'IL', 12741080, 938347, 57914),
(12, 'IN', 6732219, 420339, 36418);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `midwest-states`
--
ALTER TABLE `midwest-states`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
