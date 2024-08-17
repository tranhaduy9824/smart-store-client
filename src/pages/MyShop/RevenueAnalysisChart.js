import React, { useEffect, useRef } from 'react';
import { formatPrice } from '~/handle/formatPrice';

const RevenueAnalysisChart = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const revenueData = [
            { day: '04/08', revenue: 1800000 },
            { day: '05/08', revenue: 2100000 },
            { day: '06/08', revenue: 1900000 },
            { day: '07/08', revenue: 2300000 },
            { day: '08/08', revenue: 2500000 },
            { day: '09/08', revenue: 2800000 },
            { day: '10/08', revenue: 2400000 },
            { day: '11/08', revenue: 2000000 },
            { day: '12/08', revenue: 2200000 },
            { day: '13/08', revenue: 2600000 },
            { day: '14/08', revenue: 2700000 },
            { day: '15/08', revenue: 2800000 },
            { day: '16/08', revenue: 2900000 },
            { day: '17/08', revenue: 3000000 },
        ];

        const maxRevenue = Math.max(...revenueData.map((item) => item.revenue));
        const minRevenue = Math.min(...revenueData.map((item) => item.revenue));

        canvas.width = 900;
        canvas.height = 400;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(100, canvas.height - 50);

        revenueData.forEach((item, index) => {
            const x = 100 + index * 50;
            const y =
                canvas.height - 50 - ((item.revenue - minRevenue) / (maxRevenue - minRevenue)) * (canvas.height - 100);
            ctx.lineTo(x, y);
        });

        ctx.strokeStyle = '#4CAF50';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.font = '13px Arial';
        ctx.textAlign = 'center';
        revenueData.forEach((item, index) => {
            const x = 100 + index * 50;
            const y = canvas.height - 20;
            ctx.fillText(item.day, x, y);
        });

        ctx.textAlign = 'right';
        const yAxisStep = (maxRevenue - minRevenue) / 5;
        for (let i = 0; i <= 5; i++) {
            const y = canvas.height - 50 - i * ((canvas.height - 100) / 5);
            ctx.fillText(`${formatPrice(Math.round(minRevenue + i * yAxisStep))}`, 90, y);
        }

        ctx.beginPath();
        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 5; i++) {
            const y = canvas.height - 50 - i * ((canvas.height - 100) / 5);
            ctx.moveTo(100, y);
            ctx.lineTo(canvas.width - 50, y);
        }
        ctx.stroke();
    }, []);

    return <canvas ref={canvasRef} />;
};

export default RevenueAnalysisChart;
