-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 04, 2022 at 06:22 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

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
(1, 'NE', 1961504, 150388, 77358),
(2, 'KY', 4467673, 234498, 40408),
(3, 'OK', 3956971, 206750, 69899),
(4, 'WI', 5822434, 365931, 65498),
(5, 'SD', 884659, 61205, 77116),
(6, 'OH', 11689100, 736449, 44825),
(7, 'ND', 762062, 63386, 70761),
(8, 'MN', 10077331, 568413, 96716),
(9, 'MO', 6137428, 359952, 69715),
(10, 'KS', 2913314, 192303, 82278),
(11, 'IA', 3155070, 219841, 58295),
(12, 'IL', 12741080, 938347, 57914),
(13, 'IN', 6732219, 420339, 36418),
(14, '', 0, 0, 0),
(15, '', 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `midwest-states`
--
ALTER TABLE `midwest-states`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `midwest-states`
--
ALTER TABLE `midwest-states`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
