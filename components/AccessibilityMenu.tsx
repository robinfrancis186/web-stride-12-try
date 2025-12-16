import React from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import {
    Moon, Link as LinkIcon, Type, MoveHorizontal, Pause, ImageOff,
    MousePointer, MessageSquare, AlignVerticalSpaceAround, AlignLeft,
    Droplet, RotateCcw, X
} from 'lucide-react';

interface AccessibilityMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AccessibilityMenu: React.FC<AccessibilityMenuProps> = ({ isOpen, onClose }) => {
    const {
        contrast, setContrast,
        textSize, setTextSize,
        lineHeight, setLineHeight,
        letterSpacing, setLetterSpacing,
        highlightLinks, toggleHighlightLinks,
        dyslexiaFriendly, toggleDyslexiaFriendly,
        cursor, setCursor,
        pauseAnimations, togglePauseAnimations,
        hideImages, toggleHideImages,
        textAlign, setTextAlign,
        saturation, setSaturation,
        tooltips, toggleTooltips,
        resetSettings
    } = useAccessibility();

    if (!isOpen) return null;

    const toggleContrast = () => {
        const modes = ['normal', 'high', 'dark', 'light'] as const;
        const currentIndex = modes.indexOf(contrast);
        const nextIndex = (currentIndex + 1) % modes.length;
        setContrast(modes[nextIndex]);
    };

    const toggleTextSize = () => {
        const sizes = [1, 1.1, 1.2, 1.3];
        const currentIndex = sizes.indexOf(textSize);
        const nextIndex = (currentIndex + 1) % sizes.length;
        setTextSize(sizes[nextIndex]);
    };

    const toggleTextSpacing = () => {
        const spacings = [0, 0.1, 0.2, 0.3];
        const currentIndex = spacings.indexOf(letterSpacing);
        const nextIndex = (currentIndex + 1) % spacings.length;
        setLetterSpacing(spacings[nextIndex]);
    };

    const toggleCursor = () => {
        const modes = ['default', 'big', 'reading-guide'] as const;
        const currentIndex = modes.indexOf(cursor);
        const nextIndex = (currentIndex + 1) % modes.length;
        setCursor(modes[nextIndex]);
    };

    const toggleLineHeight = () => {
        const heights = [1.5, 1.8, 2.0, 2.2];
        const currentIndex = heights.indexOf(lineHeight);
        const nextIndex = (currentIndex + 1) % heights.length;
        setLineHeight(heights[nextIndex]);
    };

    const toggleTextAlign = () => {
        const aligns = ['left', 'center', 'right', 'justify'] as const;
        const currentIndex = aligns.indexOf(textAlign);
        const nextIndex = (currentIndex + 1) % aligns.length;
        setTextAlign(aligns[nextIndex]);
    };

    const toggleSaturation = () => {
        const saturations = [1, 0.5, 0, 2];
        const currentIndex = saturations.indexOf(saturation);
        const nextIndex = (currentIndex + 1) % saturations.length;
        setSaturation(saturations[nextIndex]);
    };

    const MenuItem = ({
        icon: Icon,
        label,
        isActive,
        onClick,
        value
    }: {
        icon: React.ElementType,
        label: string,
        isActive: boolean,
        onClick: () => void,
        value?: string | number
    }) => (
        <button
            onClick={onClick}
            className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-200 border-2
        ${isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                    : 'bg-white text-slate-700 border-slate-100 hover:border-blue-200 hover:bg-slate-50'
                }`}
        >
            <Icon size={24} className="mb-2" />
            <span className="text-sm font-medium text-center leading-tight">{label}</span>
            {value && <span className="text-xs mt-1 opacity-80">{value}</span>}
        </button>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center sm:justify-start sm:items-end sm:p-4 pointer-events-none">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto"
                onClick={onClose}
            />

            {/* Menu Container */}
            <div className="relative w-full max-w-md bg-slate-50 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">

                {/* Header */}
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between shrink-0">
                    <h2 className="text-lg font-bold flex items-center gap-2">
                        Accessibility Menu
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-slate-800 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 overflow-y-auto custom-scrollbar">

                    {/* Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <MenuItem
                            icon={MessageSquare}
                            label="Tooltips"
                            isActive={tooltips}
                            onClick={toggleTooltips}
                        />
                        <MenuItem
                            icon={Moon}
                            label="Contrast"
                            isActive={contrast !== 'normal'}
                            onClick={toggleContrast}
                            value={contrast !== 'normal' ? contrast : ''}
                        />
                        <MenuItem
                            icon={LinkIcon}
                            label="Highlight Links"
                            isActive={highlightLinks}
                            onClick={toggleHighlightLinks}
                        />
                        <MenuItem
                            icon={Type}
                            label="Bigger Text"
                            isActive={textSize !== 1}
                            onClick={toggleTextSize}
                            value={textSize > 1 ? `${Math.round((textSize - 1) * 100)}%` : ''}
                        />
                        <MenuItem
                            icon={MoveHorizontal}
                            label="Text Spacing"
                            isActive={letterSpacing !== 0}
                            onClick={toggleTextSpacing}
                        />
                        <MenuItem
                            icon={Pause}
                            label="Pause Animations"
                            isActive={pauseAnimations}
                            onClick={togglePauseAnimations}
                        />
                        <MenuItem
                            icon={ImageOff}
                            label="Hide Images"
                            isActive={hideImages}
                            onClick={toggleHideImages}
                        />
                        <MenuItem
                            icon={Type}
                            label="Dyslexia Friendly"
                            isActive={dyslexiaFriendly}
                            onClick={toggleDyslexiaFriendly}
                        />
                        <MenuItem
                            icon={MousePointer}
                            label="Cursor"
                            isActive={cursor !== 'default'}
                            onClick={toggleCursor}
                            value={cursor !== 'default' ? cursor : ''}
                        />
                        <MenuItem
                            icon={AlignVerticalSpaceAround}
                            label="Line Height"
                            isActive={lineHeight !== 1.5}
                            onClick={toggleLineHeight}
                        />
                        <MenuItem
                            icon={AlignLeft}
                            label="Text Align"
                            isActive={textAlign !== 'left'}
                            onClick={toggleTextAlign}
                            value={textAlign !== 'left' ? textAlign : ''}
                        />
                        <MenuItem
                            icon={Droplet}
                            label="Saturation"
                            isActive={saturation !== 1}
                            onClick={toggleSaturation}
                        />
                    </div>

                    {/* Reset Button */}
                    <button
                        onClick={resetSettings}
                        className="w-full mt-4 bg-slate-900 text-white p-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
                    >
                        <RotateCcw size={18} />
                        Reset All Settings
                    </button>
                </div>
            </div>
        </div>
    );
};
