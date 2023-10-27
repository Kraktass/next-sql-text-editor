-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 27, 2023 at 02:42 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edit`
--

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `_id` int(12) NOT NULL,
  `title` varchar(250) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`_id`, `title`, `description`) VALUES
(6, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(8, 'Lorem ipsum', 'Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sed arcu non odio euismod lacinia at quis risus sed. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Elementum nibh tellus molestie nunc non blandit massa enim nec. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. In ornare quam viverra orci sagittis eu volutpat. Diam ut venenatis tellus in metus vulputate eu scelerisque. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. A diam maecenas sed enim. Mattis molestie a iaculis at erat pellentesque adipiscing. Accumsan tortor posuere ac ut consequat semper. Velit euismod in pellentesque massa. Lacus sed turpis tincidunt id. Morbi blandit cursus risus at. Vitae auctor eu augue ut lectus. Eget sit amet tellus cras adipiscing enim eu. Massa vitae tortor condimentum lacinia quis vel. Phasellus faucibus scelerisque eleifend donec pretium. Tincidunt arcu non sodales neque sodales ut. Bibendum arcu vitae elementum curabitur.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `_id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
