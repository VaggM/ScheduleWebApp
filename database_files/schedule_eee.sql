-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2023 at 06:59 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schedule_eee`
--

-- --------------------------------------------------------

--
-- Table structure for table `professors`
--

CREATE TABLE `professors` (
  `id` int(11) NOT NULL,
  `last_name` varchar(25) CHARACTER SET greek COLLATE greek_general_ci NOT NULL,
  `first_name` varchar(25) CHARACTER SET greek COLLATE greek_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `professors`
--

INSERT INTO `professors` (`id`, `last_name`, `first_name`) VALUES
(1, 'Παπαδόπουλος', 'Περικλής'),
(2, 'Ζαχαριάδου', 'Αικατερίνη'),
(3, 'Τσεκούρας', 'Γεώργιος'),
(4, 'Φαμέλης', 'Ιωάννης'),
(5, 'Παπαγέωργας', 'Παναγιώτης'),
(6, 'Τσακιρίδης', 'Οδυσσέας'),
(7, 'Καλογεροπούλου', 'Σοφία'),
(8, 'Κυριάκης - Μπιτζάρος', 'Ευστάθιος'),
(9, 'Καλύβας', 'Δημήτριος'),
(10, 'Γουστουρίδης', 'Δημήτριος'),
(11, 'Καλκάνης', 'Κωνσταντίνος'),
(12, 'Ραγκούση', 'Μαρία'),
(13, 'Αλεξανδρίδης', 'Αλέξανδρος'),
(14, 'Ζέρβας', 'Ευάγγελος'),
(15, 'Μυτιληναίος', 'Στυλιανός'),
(16, 'Καμινάρης', 'Σταύρος'),
(17, 'Μανουσάκης', 'Νικόλαος'),
(18, 'Βόκας', 'Γεώργιος'),
(19, 'Πατρικάκης', 'Χαράλαμπος'),
(20, 'Λεωνιδόπουλος', 'Γεώργιος'),
(21, 'Καραϊσάς', 'Πέτρος'),
(22, 'Μορώνης', 'Αντώνιος'),
(23, 'Μαλατέστας', 'Παντελής'),
(24, 'Σταθόπουλος', 'Νικόλαος'),
(25, 'Καραμπέτσος', 'Σωτήριος'),
(26, 'Καλτσάς', 'Γρηγόριος'),
(27, 'Κανδρής', 'Ξενοφών-Διονύσιος');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `id` int(11) NOT NULL,
  `day` char(3) NOT NULL,
  `hours` char(11) NOT NULL,
  `subject` int(11) NOT NULL,
  `professor` int(11) NOT NULL,
  `classroom` varchar(20) CHARACTER SET greek COLLATE greek_general_ci NOT NULL,
  `tmima` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `day`, `hours`, `subject`, `professor`, `classroom`, `tmima`) VALUES
(1, 'Mon', '11:00-13:00', 11, 1, 'Αμφ. Χατζηνικολάου', 1),
(2, 'Wed', '13:00-15:00', 11, 1, 'Αμφ. Χατζηνικολάου', 1),
(3, 'Mon', '13:00-15:00', 12, 2, 'ZB002', 1),
(4, 'Mon', '15:00-17:00', 12, 2, 'B222', 2),
(5, 'Tue', '11:00-13:00', 12, 2, 'ZB001', 1),
(6, 'Wed', '11:00-13:00', 12, 2, 'ZB002', 2),
(7, 'Wed', '09:00-12:00', 13, 3, 'Αμφ. Α011', 3),
(8, 'Thu', '09:00-11:00', 13, 3, 'Αμφ. Α011', 3),
(9, 'Tue', '09:00-11:00', 14, 4, 'Αμφ. Χατζηνικολάου', 3),
(10, 'Wed', '15:00-17:00', 14, 4, 'Αμφ. Χατζηνικολάου', 3),
(20, 'Wed', '11:00-13:00', 31, 1, 'Αμφ. Χατζηνικολάου', 2),
(21, 'Fri', '17:00-19:00', 54, 15, 'ZB001', 1),
(22, 'Wed', '09:00-11:00', 722, 24, 'ΖΒ009', NULL),
(23, 'Wed', '11:00-13:00', 932, 13, 'Α109', NULL),
(24, 'Fri', '09:00-12:00', 22, 5, '', NULL),
(25, 'Tue', '15:00-17:00', 43, 11, 'ZB002', 2),
(26, 'Wed', '11:00-13:00', 64, 19, 'Αμφ. Χατζηνικολάου', 2),
(27, 'Mon', '15:00-17:00', 822, 15, 'ΖΒ009', NULL),
(36, 'Fri', '13:00-15:00', 14, 7, 'ZB002', NULL),
(100, 'Wed', '09:00-11:00', 812, 18, 'ZB001', NULL),
(101, 'Fri', '15:00-17:00', 24, 3, 'Α109', NULL),
(5000, 'Fri', '16:00-19:00', 13, 1, 'ZB002', 3);

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` varchar(40) CHARACTER SET greek COLLATE greek_general_ci NOT NULL,
  `semester` tinyint(4) NOT NULL,
  `kiklos` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `semester`, `kiklos`) VALUES
(11, 'Μαθηματική Ανάλυση Ι', 1, NULL),
(12, 'Φυσική', 1, NULL),
(13, 'Ηλεκτρικά Κυκλώματα Ι', 1, NULL),
(14, 'Γραμμική Άλγεβρα', 1, NULL),
(21, 'Μαθηματική Ανάλυση ΙΙ', 2, NULL),
(22, 'Ηλεκτρονικά Ι', 2, NULL),
(23, 'Ηλεκτρικά Κυκλώματα ΙΙ', 2, NULL),
(24, 'Σχεδίαση Λογικών Κυκλωμάτων', 2, NULL),
(31, 'Διαφορικές Εξισώσεις - Μετασχηματισμοί', 3, NULL),
(32, 'Ηλεκτροτεχνικά Υλικά', 3, NULL),
(33, 'Ηλεκτρονικά ΙΙ', 3, NULL),
(34, 'Σχεδίαση Ψηφιακών Συστημάτων', 3, NULL),
(41, 'Σήματα και Συστήματα', 4, NULL),
(42, 'Αρχιτεκτονική Υπολογιστικών Συστημάτων', 4, NULL),
(43, 'Τεχνική Μηχανική', 4, NULL),
(44, 'Πιθανότητες και Στατιστική', 4, NULL),
(51, 'Αλγόριθμοι και Δομές δεδομένων', 5, NULL),
(52, 'Συστήματα Αυτομάτου Ελέγχου Ι', 5, NULL),
(53, 'Τηλεπικοινωνίες', 5, NULL),
(54, 'Ηλεκτρομαγνητικά Πεδία ΙΙ', 5, NULL),
(61, 'Ηλεκτρικές Εγκαταστάσεις', 6, NULL),
(62, 'Εισαγωγή στα Συστήματα Ηλεκτρικής Ενέργε', 6, NULL),
(63, 'Ηλεκτρονικά Ισχύος Ι', 6, NULL),
(64, 'Δίκτυα Υπολογιστών', 6, NULL),
(711, 'Συστήματα Ηλεκτρικής Ενέργειας Ι', 7, 1),
(712, 'Ηλεκτρικές Μηχανές Ι', 7, 1),
(721, 'Τηλεπικοινωνιακά Συστήματα', 7, 2),
(722, 'Μικροκύματα', 7, 2),
(731, 'Μικροελεγκτές - Ενσωματωμένα Συστήματα', 7, 3),
(732, 'Συστήματα Αυτομάτου Ελέγχου ΙΙ', 7, 3),
(811, 'Σταθμοί Παραγωγής Ενέργειας', 8, 1),
(812, 'Υψηλές Τάσεις ΙΙ', 8, 1),
(821, 'Οπτικές Επικοινωνίες', 8, 2),
(822, 'Κεραίες', 8, 2),
(831, 'Λειτουργικά Συστήματα', 8, 3),
(832, 'Υπολογιστική Νοημοσύνη', 8, 3),
(911, 'Διανομή Ηλεκτρικής Ενέργειας', 9, 1),
(912, 'Συστήματα Ηλεκτρικής Ενέργειας', 9, 1),
(921, 'Θεωρία Πληροφορίας και Κωδικών', 9, 2),
(922, 'Ασύρματες Ζεύξεις και Διάδοση', 9, 2),
(931, 'Σύγχρονα Μικροϋπολογιστικά Συστήματα', 9, 3),
(932, 'Ευφυής Έλεγχος', 9, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `professors`
--
ALTER TABLE `professors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject` (`subject`),
  ADD KEY `professor` (`professor`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`subject`) REFERENCES `subjects` (`id`),
  ADD CONSTRAINT `schedule_ibfk_2` FOREIGN KEY (`professor`) REFERENCES `professors` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
