import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { X, CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceFeature {
	title: string;
}

interface TechnologyOption {
	name: string;
	description: string;
}

export interface ServiceModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	description: string;
	// features prop removed
	idealFor?: string;
	visual?: string;
	technologyOptions?: TechnologyOption[];
	designApproach?: string;
	standardInclusions?: string[];
	optionalAddOns?: string;
}

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => (
	<h3 className="font-comfortaa font-bold text-[18px] text-[#1D1D1F] mb-3 mt-5">
		{children}
	</h3>
);

const ServiceModal = ({
	isOpen,
	onClose,
	title,
	description,
	// features prop removed
	idealFor,
	visual,
	technologyOptions,
	designApproach,
	standardInclusions,
	optionalAddOns,
}: ServiceModalProps) => {
	const websiteTechNote =
		"*(Platform choice impacts cost and timeline. We'll guide you to the best fit.)*";
	const webAppTechNote =
		'*(The specific architecture and stack are chosen collaboratively based on detailed project analysis to ensure optimal performance, scalability, and maintainability.)*';
	const techNoteToShow =
		title === 'Websites'
			? websiteTechNote
			: title === 'Web Applications'
			? webAppTechNote
			: null;

	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="max-w-4xl w-[90vw] p-0 bg-white rounded-xl shadow-2xl font-comfortaa">
				<div className="py-8 px-10 max-h-[85vh] overflow-y-auto">
					<DialogHeader className="pb-4 border-b border-gray-200 mb-6">
						<DialogTitle className="text-[28px] font-comfortaa font-bold text-[#1D1D1F]">
							{title}
						</DialogTitle>
					</DialogHeader>

					<div className="space-y-6">
						<p className="text-[17px] leading-[1.6] text-[#1D1D1F]">
							{description}
						</p>

						{/* Removed the block that rendered the 'features' array */}

						{designApproach && (
							<div>
								<SectionHeading>Design Approach</SectionHeading>
								<p className="text-[14px] text-[#1D1D1F] leading-[1.6]">
									{designApproach}
								</p>
							</div>
						)}

						{technologyOptions && technologyOptions.length > 0 && (
							<div>
								<SectionHeading>
									{title === 'E-commerce Solutions'
										? 'Core Platform'
										: 'Technology Options'}
								</SectionHeading>
								<div className="space-y-4">
									{technologyOptions.map((tech, index) => (
										<div key={index}>
											<span className="text-[15px] font-bold text-[#1D1D1F]">
												{tech.name}
											</span>
											<p className="text-[14px] text-[#1D1D1F] mt-1 leading-[1.5]">
												{tech.description}
											</p>
										</div>
									))}
								</div>
								{techNoteToShow && (
									<p className="text-[13px] text-[#6E6E73] mt-4 italic">
										{techNoteToShow}
									</p>
								)}
							</div>
						)}

						{standardInclusions &&
							standardInclusions.length > 0 && (
								<div>
									<SectionHeading>
										What's Included
									</SectionHeading>
									<ul className="space-y-2 columns-1 md:columns-2 gap-x-6">
										{standardInclusions.map(
											(item, index) => (
												<li
													key={index}
													className="flex items-start text-[14px] text-[#1D1D1F] mb-1 break-inside-avoid"
												>
													<CheckIcon className="h-4 w-4 mr-2 mt-[3px] text-blue-600 flex-shrink-0" />
													<span>{item}</span>
												</li>
											),
										)}
									</ul>
								</div>
							)}

						{optionalAddOns && (
							<div>
								<SectionHeading>
									Available Add-ons
								</SectionHeading>
								<p className="text-[14px] text-[#1D1D1F] leading-[1.6]">
									{optionalAddOns}
								</p>
							</div>
						)}

						{idealFor && (
							<div className="pt-4 mt-4 border-t border-gray-200">
								<p className="text-[14px] text-[#6E6E73]">
									<span className="font-medium text-gray-700">
										Ideal For:
									</span>{' '}
									{idealFor}
								</p>
							</div>
						)}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ServiceModal;
