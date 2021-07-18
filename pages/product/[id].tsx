import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import AvoDescription from '@components/AvoDescription';

const ProductDetails = () => {
	const [details, setDetails] = useState<TProduct>({} as TProduct);
	const router = useRouter();
	//Retrieve id of avocado
	const productId = router.query.id;

	useEffect(() => {
		if (productId) {
			fetch(`/api/avo/${productId}`)
				.then(res => res.json())
				.then(data => setDetails(data))
				.catch(err => console.log(err));
		}
	}, [productId]);

	return (
		<div>
			{details.id && (
				<>
					<AvoDescription description={details} />
				</>
			)}
		</div>
	);
};

export default ProductDetails;