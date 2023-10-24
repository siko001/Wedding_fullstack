import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axiosClient from '../axiosClient';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 750px) {
		flex-direction: column-reverse;
	}
	.image-container {
		display: flex;
		overflow: hidden;

		@media screen and (max-width: 750px) {
			flex-direction: column;
		}
		.img_cont {
			margin: 0 10px;
			min-height: 100%;
			width: 100%;
			transition: transform 2.5s ease;
			@media screen and (max-width: 750px) {
				margin: 10px auto;
				width: 80%;
			}
			img {
				height: 80%;
				width: 100%;
				object-fit: contain;
			}
		}
	}
	.pagination {
		display: flex;
		justify-content: center;
		gap: 5px;
		margin: 22px 0;
		height: 30px;
		font-size: 1.5rem;

		button {
			padding: 0.25rem 0.5rem;
			background-color: #396caf;
			color: #fff;
		}
		span {
			margin: 0 10px;
		}
	}

	.uploader {
		font-size: 1rem;
	}
`;

const Images = () => {
	const [images, setImages] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [hasMorePages, setHasMorePages] = useState(true);
	const [totalPages, setTotalPages] = useState(1); // Initialize with 1

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const response = await axiosClient.get('/images', {
					params: { page: currentPage },
				});
				const newImages = response.data.images;
				setImages(newImages);

				// Check if there are more pages and update total pages
				setHasMorePages(response.data.has_more_pages);
				setTotalPages(response.data.total_pages);
			} catch (error) {
				console.error('Error fetching images:', error);
			}
		};

		fetchImages();
	}, [currentPage]);

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setImages((prevImages) => prevImages.map((image) => ({ ...image, transform: 'translateX(200%)' })));
			setCurrentPage(currentPage - 1);

			// After animation, reset the transform
			setTimeout(() => {
				setImages((prevImages) => prevImages.map((image) => ({ ...image, transform: 'translateX(0)' })));
			}, 1000); // Adjust this value to match the transition duration
		}
	};

	const handleNextPage = () => {
		if (currentPage > 0 && currentPage != totalPages) {
			setImages((prevImages) => prevImages.map((image) => ({ ...image, transform: 'translateX(-300%)' })));
			setCurrentPage(currentPage + 1);

			// After animation, reset the transform
			setTimeout(() => {
				setImages((prevImages) => prevImages.map((image) => ({ ...image, transform: 'translateX(0)' })));
			}, 1000); // Adjust this value to match the transition duration
		}
	};

	const handleFirstPage = () => {
		setCurrentPage(1);
	};

	const handleLastPage = () => {
		setCurrentPage(totalPages); // Go to the last known page
	};

	return (
		<Container>
			<div className="image-container">
				{images.map((image) => (
					<div className="img_cont" key={image.id} style={{ transform: image.transform }}>
						<img src={'http://localhost:8000/storage/uploads/' + image.img_url} alt={image.title} />
						<p className="uploader lightest-font">Uploaded By: {image.name}</p>
					</div>
				))}
			</div>

			<div className="pagination">
				<button
					className={currentPage === 1 || currentPage === 2 ? 'disabled' : ''}
					onClick={handleFirstPage}
					disabled={currentPage === 1 || currentPage === 2}
				>
					First
				</button>
				<button className={currentPage === 1 ? 'disabled' : ''} onClick={handlePreviousPage} disabled={currentPage === 1}>
					Previous
				</button>
				<span>{currentPage}</span>
				<button
					className={currentPage === totalPages ? 'disabled' : ''}
					onClick={handleNextPage}
					disabled={currentPage === totalPages}
				>
					Next
				</button>
				<button
					className={currentPage === totalPages || currentPage === totalPages - 1 ? 'disabled' : ''}
					onClick={handleLastPage}
					disabled={currentPage === totalPages || currentPage === totalPages - 1}
				>
					Last
				</button>
			</div>
		</Container>
	);
};

export default Images;
