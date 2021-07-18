import React, { useState } from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GeneralDescStyled, AddFieldStyled, AboutStyled } from './styles/AvoDescription';

type AvoProps = {
	description: TProduct;
};

const AvoDescription = ({ description }: AvoProps) => {
	const [quantity, setQuantity] = useState<number>(1);

	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		if (ev.target.valueAsNumber < 1 || isNaN(ev.target.valueAsNumber)) {
			return;
		}

		setQuantity(ev.target.valueAsNumber);
	};

	return (
		<main>
			<GeneralDescStyled>
				<Image
					blurDataURL={description.image}
					src={description.image}
					alt={description.name}
					width='300px'
					height='300px'
					placeholder='blur'
				/>
				<div className='general_description'>
					<h1>{description.name}</h1>
					<em>${description.price}</em>
					<AddFieldStyled>
						<input
							type='number'
							name='Quantity'
							value={quantity}
							onChange={handleChange}
						/>
						<button>
							<FontAwesomeIcon icon='shopping-cart' size='1x' /> Add To Cart
						</button>
					</AddFieldStyled>
				</div>
			</GeneralDescStyled>
			<AboutStyled>
				<h2>About</h2>
				<p>{description.attributes.description}</p>
			</AboutStyled>
		</main>
	);
};

export default AvoDescription;